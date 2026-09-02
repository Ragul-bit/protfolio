export interface SkillCategory {
  id: string;
  iconName: string;
  title: string;
  description: string;
  chips: string[];
}

export interface InterestItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  isFeatured: boolean;
  category: string;
  title: string;
  description: string;
  points?: string[];
  chips: string[];
  codeSnippet?: {
    filename: string;
    sql: string;
    note: string;
  };
  demoQueries?: {
    prompt: string;
    sql: string;
    resultSummary: string;
    executionTimeMs: number;
    rows: Array<Record<string, string | number>>;
  }[];
  githubUrl?: string;
  liveDemoUrl?: string;
}

export interface TimelineItem {
  id: string;
  yearRange: string;
  subLabel?: string;
  statusBadge?: string;
  isCurrent?: boolean;
  degreeOrTitle: string;
  institution: string;
  description: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationLink?: string;
  skillsLearned?: string[];
  pdfAvailable?: boolean;
}
