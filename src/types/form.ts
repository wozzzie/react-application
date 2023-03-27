interface Card {
  authorName: string;
  requirements: string;
  date: string;
  location: string;
  title: string;
  isChecked: boolean;
  file: File | null;
}

interface FormState {
  cards: Card[];
  errors: {
    name?: string;
    requirements?: string;
    date?: string;
    location?: string;
    title?: string;
    isChecked?: string;
    file?: string;
  };
}

interface CardProps {
  authorName: string;
  requirements: string;
  date: string;
  location: string;
  title: string;
  isChecked: boolean;
  file: File | null;
}

export type { Card, FormState, CardProps };