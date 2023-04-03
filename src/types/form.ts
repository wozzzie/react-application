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
  showPopup: boolean;
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

interface FormValues {
  authorName: string;
  requirements: string;
  date: string;
  location: string;
  title: string;
  isChecked: boolean;
  file: FileList;
}

export type { Card, FormState, CardProps, FormValues };
