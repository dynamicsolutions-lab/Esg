import { Question } from '../types';

export const calculateScore = (answers: Record<number, string>, questions: Question[]) => {
  let correctCount = 0;
  const categoryScores: Record<string, { total: number; correct: number }> = {};

  questions.forEach((q) => {
    // Initialize category if not exists
    if (!categoryScores[q.category]) {
      categoryScores[q.category] = { total: 0, correct: 0 };
    }
    
    categoryScores[q.category].total += 1;

    if (answers[q.id] === q.correctOptionId) {
      correctCount += 1;
      categoryScores[q.category].correct += 1;
    }
  });

  const percentage = Math.round((correctCount / questions.length) * 100);

  return {
    correctCount,
    totalQuestions: questions.length,
    percentage,
    categoryScores
  };
};

export const getRecommendation = (percentage: number): string => {
  if (percentage >= 90) return "Executive Level: You demonstrate deep strategic understanding suitable for leadership or senior consultancy roles.";
  if (percentage >= 75) return "Analyst Level: Strong foundation. You are ready for practical application but review specific technical gaps.";
  if (percentage >= 60) return "Associate Level: Good grasp of basics. Focus on connecting frameworks to financial materiality.";
  return "Trainee Level: Focus on distinguishing the core purposes of GRI, SASB, and the fundamentals of Carbon scopes.";
};