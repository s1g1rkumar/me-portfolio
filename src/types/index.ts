export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  xpLabel: string;
  iconName: string;
  category: 'Languages' | 'Frontend' | 'Backend' | 'Databases' | 'Cloud & DevOps' | 'Tools';
  description?: string;
  rank?: string;
}

export interface ExperienceQuest {
  id: string;
  level: number;
  title: string;
  company: string;
  location: string;
  workType: 'Onsite' | 'Remote' | 'Hybrid';
  period: string;
  status: 'COMPLETED' | 'IN PROGRESS';
  summary: string;
  achievements: string[];
  techStack: string[];
  rarity: 'MYTHIC' | 'LEGENDARY' | 'EPIC' | 'RARE';
}

export interface ProjectAchievement {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  fullDetails: string;
  imagePlaceholder?: string;
  techStack: string[];
  rarity: 'LEGENDARY' | 'MYTHIC' | 'EPIC' | 'RARE';
  unlockedDate: string;
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  description: string;
  icon: string;
}

export interface CharacterAttribute {
  name: string;
  score: number; // out of 100
  trait: string;
  icon: string;
}
