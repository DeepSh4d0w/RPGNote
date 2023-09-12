export interface storyProps {
  title: string;
  subtitle?: string | null;
  description?: string | null;
  storyteller: string;
  system: string;
  genders: string[];
  date?: Date | null;
}
