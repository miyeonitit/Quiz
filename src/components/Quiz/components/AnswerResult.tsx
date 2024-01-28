import styles from "./AnswerResult.module.css";

type answerResultProps = {
  rate: string;
  correctAnswer: string;
};

const AnswerResult: React.FC<answerResultProps> = ({ rate, correctAnswer }) => {
  const isCorrect = rate === "correct";
  const resultText = isCorrect ? (
    "정답이에요! 다음 문제도 풀어보아요 ✨"
  ) : (
    <span>
      오답이에요. 정답은
      <span className={styles.bold_tag}> {correctAnswer}</span> 이었어요.
    </span>
  );

  return (
    <div className={styles.quiz_question_result}>
      <div
        className={
          isCorrect
            ? styles.quiz_question_correct
            : styles.quiz_question_incorrect
        }
      >
        {isCorrect ? "O" : "X"}
      </div>

      <div className={styles.quiz_question_result_text}>{resultText}</div>
    </div>
  );
};

export default AnswerResult;
