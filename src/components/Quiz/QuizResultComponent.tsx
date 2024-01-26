import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { countTimer } from "../../store/timerStore";
import { correctAnswer, incorrectAnswer } from "../../store/answerStore";
import { calculateScore } from "../../utils/calculateScore";

import Chart from "../Chart/Chart";
import Button from "../Button/Button";

import styles from "./QuizResultComponent.module.css";

const QuizResultComponent: React.FC = () => {
  const navigate = useNavigate();

  // recoil 상태 관리 - 현재 카운트된 time 저장
  const timer = useRecoilValue(countTimer);

  // recoil 상태 관리 - 정답 개수, 오답 개수
  const correctAnswerLength = useRecoilValue(correctAnswer);
  const incorrectAnswerLength = useRecoilValue(incorrectAnswer);

  return (
    <div className={styles.quiz_result_wrapper}>
      <div className={styles.quiz_timer_infomation}>
        퀴즈 마무리까지 모두 ⏰ <span className={styles.bold_tag}>{timer}</span>{" "}
        시간 소요되었어요
      </div>

      <div className={styles.quiz_result_contents}>
        <div className={styles.quiz_chart_box}>
          <Chart
            correctAnswerLength={correctAnswerLength}
            incorrectAnswerLength={incorrectAnswerLength}
          />
        </div>

        <h1 className={styles.quiz_score}>
          ✨{" "}
          {calculateScore(
            correctAnswerLength,
            correctAnswerLength + incorrectAnswerLength
          )}
          점 ✨
        </h1>

        <h2>
          {correctAnswerLength + incorrectAnswerLength}개의 문제 중{" "}
          <span className={styles.bold_tag}>{correctAnswerLength}개</span>를
          맞히셨어요!
        </h2>

        <div className={styles.quiz_result_table_box}>
          <div className={styles.quiz_result_table}>
            <div className={styles.correct_answers_tag}>정답</div>
            <div className={styles.answers_length}>{correctAnswerLength}</div>
          </div>

          <div className={styles.quiz_result_table}>
            <div className={styles.incorrect_answers_tag}>오답</div>
            <div className={styles.answers_length}>{incorrectAnswerLength}</div>
          </div>
        </div>
      </div>

      <footer className={styles.quiz_result_footer}>
        <Button>오답노트 작성하기</Button>
        <Button onClick={() => navigate("/")}>다시 풀어보기</Button>
      </footer>
    </div>
  );
};

export default QuizResultComponent;