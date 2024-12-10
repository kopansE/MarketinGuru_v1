import { Request, Response } from 'express';
import { Version } from './version.model';
import { IVersionComponents } from './types/version.types';

export class VersionController {
  public static async createVersion(req: Request, res: Response): Promise<void> {
    try {
      const { components, isPage = true } = req.body; // Default isPage to true
      
      if (!components) {
        res.status(400).json({ message: 'Components are required' });
        return;
      }

      const latestVersion = await Version.findOne().sort({ versionNumber: -1 });
      const newVersionNumber = latestVersion ? latestVersion.versionNumber + 1 : 1;

      const version = new Version({
        versionNumber: newVersionNumber,
        components,
        url: `/v/${newVersionNumber}`,
        isPage: true, // Always set to true for landing pages
        timestamp: new Date()
      });

      const savedVersion = await version.save();
      console.log('Saved version:', savedVersion);
      
      res.status(201).json(savedVersion);
    } catch (error) {
      console.error('Error creating version:', error);
      res.status(400).json({ 
        message: error instanceof Error ? error.message : 'Unknown error occurred' 
      });
    }
  }

  public static async getVersion(req: Request, res: Response): Promise<void> {
    try {
      const version = await Version.findOne({ 
        versionNumber: parseInt(req.params.versionNumber) 
      });
      
      if (!version) {
        res.status(404).json({ message: 'Version not found' });
        return;
      }
      
      // Add template data for rendering
      if (version.components) {
        Object.entries(version.components).forEach(([key, component]) => {
          if (component && component.template) {
            // Add any necessary template data for rendering
            component.template = {
              ...component.template,
            };
          }
        });
      }
      
      res.json(version);
    } catch (error) {
      res.status(500).json({ 
        message: error instanceof Error ? error.message : 'Unknown error occurred' 
      });
    }
  }
}