export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  badgeUrl?: string;
  verificationUrl?: string;
  highlight?: boolean;
  type: 'Course' | 'Certification' | 'Badge';
}
