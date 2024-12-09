export interface IComponentState {
    template: any;
    text: {
      title?: string;
      description?: string;
    };
    type: string;
  }
  
  export interface IVersionComponents {
    navbar: IComponentState;
    hero: IComponentState;
    features: IComponentState;
    contactForm: IComponentState;
    footer: IComponentState;
  }
  
  export interface IVersion {
    versionNumber: number;
    components: IVersionComponents;
    timestamp: Date;
    url: string;
  }