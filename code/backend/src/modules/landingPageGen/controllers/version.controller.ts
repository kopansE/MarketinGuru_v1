
import { Request, Response } from 'express';
import { Version } from '../models/version.model';

export class VersionController {
  public static async getAllVersions(req: Request, res: Response): Promise<void> {
    try {
      const versions = await Version.find().sort({ versionNumber: 1 });
      res.json(versions);
    } catch (error) {
      res.status(500).json({ message: error instanceof Error ? error.message : 'Unknown error occurred' });
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
      
      res.json(version);
    } catch (error) {
      res.status(500).json({ message: error instanceof Error ? error.message : 'Unknown error occurred' });
    }
  }

  public static async createVersion(req: Request, res: Response): Promise<void> {
    try {
      const latestVersion = await Version.findOne().sort({ versionNumber: -1 });
      const newVersionNumber = latestVersion ? latestVersion.versionNumber + 1 : 1;

      const version = new Version({
        versionNumber: newVersionNumber,
        components: req.body.components,
        url: `/v${newVersionNumber}`
      });

      const newVersion = await version.save();
      res.status(201).json(newVersion);
    } catch (error) {
      res.status(400).json({ message: error instanceof Error ? error.message : 'Unknown error occurred' });
    }
  }
}