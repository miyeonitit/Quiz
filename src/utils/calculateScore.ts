export const calculateScore = (
  correctAnswer: number,
  totalQuestLength: number
): number => {
  const MAX_SCORE = 100;
  const totalQuestions = totalQuestLength;
  const pointsPerQuestion = MAX_SCORE / totalQuestions;

  return correctAnswer * pointsPerQuestion;
};
