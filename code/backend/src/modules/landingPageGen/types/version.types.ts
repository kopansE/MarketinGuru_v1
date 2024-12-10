export interface IComponentState {
  template: {
    label: string;  // Store just the template identifier
    type: string;   // The component type (NAVBAR, HERO, etc)
  } | null;
  text: {
    title?: string;
    description?: string;
  };
  type: string;
}

export interface IVersionComponents {
  navbar?: IComponentState;
  hero?: IComponentState;
  features?: IComponentState;
  contactForm?: IComponentState;
  footer?: IComponentState;
}

export interface IVersion {
  versionNumber: number;
  components: IVersionComponents;
  timestamp: Date;
  url: string;
  pageName?: string;
  isPage: boolean;
}

export interface IVersionComponents {
  [key: string]: IComponentState | undefined;

  // Navigation components
  navbar?: IComponentState;
  
  // Hero section components
  hero?: IComponentState;
  
  // Feature section components
  features?: IComponentState;
  
  // Footer components
  footer?: IComponentState;
  
  // Form components
  contactForm?: IComponentState;
  
  // Content section components
  content?: IComponentState;
  testimonials?: IComponentState;
  pricing?: IComponentState;
  team?: IComponentState;
  
  // Media components
  gallery?: IComponentState;
  video?: IComponentState;
  
  // Call-to-action components
  cta?: IComponentState;
  
  // Blog components
  blogSection?: IComponentState;
  blogPost?: IComponentState;
  
  // Service components
  services?: IComponentState;
  
  // Product components
  productDisplay?: IComponentState;
  productGrid?: IComponentState;
  
  // Social proof components
  socialProof?: IComponentState;
  clientLogos?: IComponentState;
  
  // Newsletter components
  newsletter?: IComponentState;
  
  // FAQ components
  faq?: IComponentState;
  
  // Stats components
  statistics?: IComponentState;
  
  // Map components
  map?: IComponentState;
  
  // Timeline components
  timeline?: IComponentState;
  
  // Custom sections
  customSection?: IComponentState;
}