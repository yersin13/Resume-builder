// src/types.ts

import { ReactNode } from "react";

export interface ExperienceItem {
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean; // ✅ this is the correct property name
}



export interface CertificateItem {
  name: string;
  dateObtained: string;
  comment?: string;
}


export interface ResumeData {
  name: string;
  email: string;
  phone: string;
  summary: string;
  skills: string[];
  education: EducationItem[];
  experience: ExperienceItem[];
  certificates: CertificateItem[];
  languages: string[];
  interests: string[];
  includeReferences: boolean;
  portfolio: string;
}
