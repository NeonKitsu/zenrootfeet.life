
export interface NavLink {
  name: string;
  path: string;
  emoji: string;
}

export interface PillarCardProps {
  slug: string;
  title: string;
  description: string;
  emoji: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}