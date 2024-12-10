// version.service.ts
import { Version, IVersionDocument } from './version.model';
import { IVersion, IVersionComponents, IComponentState } from './types/version.types';

export class VersionService {
  public static async getAllVersions(): Promise<IVersionDocument[]> {
    return Version.find().sort({ versionNumber: -1 });
  }

  public static async getVersionByNumber(versionNumber: number): Promise<IVersionDocument | null> {
    return Version.findOne({ versionNumber });
  }

  public static async createVersion(components: IVersionComponents): Promise<IVersionDocument> {
    try {
      // Validate components structure
      if (!components || typeof components !== 'object') {
        throw new Error('Invalid components structure');
      }

      // Process components to ensure correct structure
      const processedComponents = this.processComponents(components);

      const latestVersion = await Version.findOne().sort({ versionNumber: -1 });
      const newVersionNumber = latestVersion ? latestVersion.versionNumber + 1 : 1;

      const version = new Version({
        versionNumber: newVersionNumber,
        components: processedComponents,
        url: `/v${newVersionNumber}`,
        isPage: false,
        timestamp: new Date()
      });

      return version.save();
    } catch (error) {
      console.error('Error creating version:', error);
      throw error;
    }
  }

  public static async savePage(components: IVersionComponents, pageName: string): Promise<IVersionDocument> {
    try {
      // Check if page exists
      const existingPage = await Version.findOne({ pageName, isPage: true });
      if (existingPage) {
        throw new Error('Page with this name already exists');
      }

      // Process components
      const processedComponents = this.processComponents(components);

      const latestVersion = await Version.findOne().sort({ versionNumber: -1 });
      const newVersionNumber = latestVersion ? latestVersion.versionNumber + 1 : 1;

      const page = new Version({
        versionNumber: newVersionNumber,
        components: processedComponents,
        url: `/pages/${pageName.toLowerCase().replace(/\s+/g, '-')}`,
        pageName,
        isPage: true,
        timestamp: new Date()
      });

      return page.save();
    } catch (error) {
      console.error('Error saving page:', error);
      throw error;
    }
  }

  private static processComponents(components: IVersionComponents): IVersionComponents {
    const processedComponents: IVersionComponents = {};
    
    // Process each component type (navbar, hero, features, etc.)
    Object.entries(components).forEach(([key, component]) => {
      if (component && component.template) {
        processedComponents[key] = {
          template: {
            label: component.template.label,
            type: component.type
          },
          text: component.text || {},
          type: component.type
        };
      }
    });

    return processedComponents;
  }
}

