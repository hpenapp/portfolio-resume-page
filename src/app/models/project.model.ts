export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl?: string;
  technologies: string[];
  category: 'Data Engineering' | 'Web Development' | 'Automation' | 'All';
  client?: string;
  link?: string;
  githubLink?: string;
}
