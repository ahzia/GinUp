export interface Initiative {
    id: string;
    company: string;
    initiative: string;
    challenge: string;
    description: string;
    callToAction: string[];
    links: string[];
    videoFile: string;
  }
  
  export interface InitiativesData {
    initiatives: Initiative[];
  }
  