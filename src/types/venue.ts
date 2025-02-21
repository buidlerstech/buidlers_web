export interface Venue {
  title: string;
  description: string;
  location: string;
  assistants: number;
  m2: number;
  icon: string;
  public: string;
  year?: number;
}

export interface TimelineProps {
  venues: Venue[];
  years: number[];
} 