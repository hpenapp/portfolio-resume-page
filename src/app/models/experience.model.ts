export interface Experience {
  id: string;
  company: string;
  location: string;
  logoUrl?: string;
  role: string;
  period: string;
  description: string;
  achievements?: string[];
  skills?: string[];
  translations?: {
    es: {
      role: string;
      description: string;
      achievements: string[];
    }
  };
}
