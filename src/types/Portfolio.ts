export type Experience = {
  company: string;
  position: string;
  location: string;
  date: string;
  responsibility?: string[];
  skills?: string[];
}

export type Work = {
  company: string;
  id: number;
  workOn: string;
  developed: string[];
  skills: string[];
  packages: string[];
  video?: string;
  website?: string;
  appUrl?: string;
}

export type Skill = {
  icon: string;
  title: string;
  percentage: string;
  startDate?: Date;
}

export type RecentWork = {
  id: number;
  company: string;
  workOn: string;
  thumbnail: string;
}