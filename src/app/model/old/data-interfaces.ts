
export class Section {
  navTitle: SectionType;
  header: string;
  questions: Question[];
  menu: DetailMenuSection[];
}

export class DetailMenuSection {
  sectionHeader: string;
  menuSections: MenuItem[];
}

export interface MenuItem {
  header: string;
  subs: string[];
}

export interface Question {
  title: string;
  nav?: string;
  question: string;
  quotes: Quote[];
}

export interface Quote {
  tagline: string;
  quote: string;
  personId: number;
}

export interface Person {
  id: number;
  name: string;
  shortName: string;
  color: string;
  fontColor: string;
}

export type SectionType = 'Game Changers' | 'Support' | 'Accountability' | 'Community' | 'Principles' | 'About' | 'Movement';
