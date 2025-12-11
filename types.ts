export type Category = 'Fundamentals' | 'Climate & Carbon' | 'Social & Governance';

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  text: string;
  category: Category;
  options: Option[];
  correctOptionId: string;
  explanation: string;
}

export interface ExamState {
  status: 'idle' | 'running' | 'finished';
  currentQuestionIndex: number;
  answers: Record<number, string>; // questionId -> optionId
  markedForReview: number[]; // array of questionIds
  timeRemaining: number; // in seconds
}

export interface ExamConfig {
  durationMinutes: number;
  totalQuestions: number;
}