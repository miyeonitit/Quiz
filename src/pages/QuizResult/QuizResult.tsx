import styles from "./QuizResult.module.css";

import Button from "../../components/Button/Button";

const QuizResult = () => {
  return (
    <div className={styles.quiz_result_wrapper}>
      <div className={styles.quiz_timer_infomation}>
        퀴즈 마무리까지 모두 ⏰ <span className={styles.bold_tag}>10:00</span>{" "}
        시간 소요되셨어요
      </div>

      <div className={styles.quiz_result_contents}>
        <div>차트 표기</div>

        <h1>
          10개의 문제 중 <span className={styles.bold_tag}>6개</span>를
          맞히셨어요!
        </h1>

        <div className={styles.quiz_result_table_box}>
          <div className={styles.quiz_result_table}>
            <div className={styles.correct_answers_tag}>정답</div>
            <div className={styles.answers_length}>6</div>
          </div>

          <div className={styles.quiz_result_table}>
            <div className={styles.incorrect_answers_tag}>오답</div>
            <div className={styles.answers_length}>4</div>
          </div>
        </div>
      </div>

      <footer className={styles.quiz_result_footer}>
        <Button>오답노트 작성하기</Button>
        <Button>다시 풀어보기</Button>
      </footer>
    </div>
  );
};

export default QuizResult;
