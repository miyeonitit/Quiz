import Button from "../../components/Button/Button";
import AnswerButton from "../../components/Answer/AnswerButton";

import styles from "./QuizPage.module.css";

const QuizPage = () => {
  const notify = () => {};

  return (
    <>
      <div className={styles.quiz_page_wrapper}>
        <div className={styles.quiz_question_box}>
          <h1 className={styles.quiz_question_mark}>Q.</h1>
          <h1>동물 중에서 뭐가 제일 좋아요?</h1>
        </div>

        <div className={styles.quiz_answer_box}>
          <AnswerButton onClick={notify}>호랑이</AnswerButton>
          <AnswerButton onClick={notify}>고양이</AnswerButton>
          <AnswerButton onClick={notify}>사자</AnswerButton>
          <AnswerButton onClick={notify}>삵</AnswerButton>
        </div>

        <div>
          <Button>다음 문제</Button>
        </div>

        <footer className={styles.footer_box}>
          <div className={styles.timer}>⏰ 01:00</div>
          <div className={styles.question_length}>1 / 10</div>
        </footer>
      </div>
    </>
  );
};

export default QuizPage;
