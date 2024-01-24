import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";

import { countTimer } from "../../store/timerStore";
import { correctAnswer, incorrectAnswer } from "../../store/answerStore";
import Button from "../../components/Button/Button";

import styles from "./QuizResult.module.css";
import { Link } from "react-router-dom";

const QuizResult: React.FC = () => {
  // recoil 상태 관리 - 정답 개수, 오답 개수
  const correctAnswerLength = useRecoilValue(correctAnswer);
  const incorrectAnswerLength = useRecoilValue(incorrectAnswer);

  // recoil 상태 관리 - 현재 카운트된 time 저장
  const timer = useRecoilValue(countTimer);

  const calculateScore = (correctAnswer: number): number => {
    const MAX_SCORE = 100;
    const totalQuestions = correctAnswerLength + incorrectAnswerLength;
    const pointsPerQuestion = MAX_SCORE / totalQuestions;

    return correctAnswer * pointsPerQuestion;
  };

  useEffect(() => {
    if (!correctAnswerLength && !incorrectAnswerLength) {
      alert("처음부터 퀴즈를 풀어주세요!");
      // 홈으로 이동
    }
  }, []);

  return (
    <div className={styles.quiz_result_wrapper}>
      <div className={styles.quiz_timer_infomation}>
        퀴즈 마무리까지 모두 ⏰ <span className={styles.bold_tag}>{timer}</span>{" "}
        시간 소요되셨어요
      </div>

      <div className={styles.quiz_result_contents}>
        <h1 className={styles.quiz_score}>
          {calculateScore(correctAnswerLength)}점
        </h1>

        <div>차트 표기</div>

        <h2>
          10개의 문제 중{" "}
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

        <Link to="/">
          <Button>다시 풀어보기</Button>
        </Link>
      </footer>
    </div>
  );
};

export default QuizResult;
