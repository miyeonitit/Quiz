import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { questionListType } from "../../type/questionListType";
import { countTimer } from "../../store/timerStore";
import { formatTimer } from "../../utils/formatTimer";
import { useTimer } from "../Provider/TimerContextProvider";
import { correctAnswer, incorrectAnswer } from "../../store/answerStore";

import Button from "../Button/Button";
import QuestionAnswer from "./components/QuestionAnswer";

import styles from "./QuizComponent.module.css";

type quizProps = {
  questionList: questionListType[];
};

const QuizComponent: React.FC<quizProps> = ({ questionList }) => {
  const { timer } = useTimer();

  // recoil 상태 관리 - 현재 카운트된 time 저장
  const setCountTimer = useSetRecoilState(countTimer);

  // recoil 상태 관리 - 정답 개수, 오답 개수
  const correctAnswerLength = useRecoilValue(correctAnswer);
  const incorrectAnswerLength = useRecoilValue(incorrectAnswer);

  // 문제 순서를 조절하는 index state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const saveCountTime = () => {
    setCountTimer(formatTimer(timer));
  };

  return (
    <div className={styles.quiz_page_wrapper}>
      {/* 퀴즈 문제와 답 컴포넌트 */}
      <QuestionAnswer
        data={questionList[currentQuestionIndex]}
        currentQuestionIndex={currentQuestionIndex}
      />

      <footer className={styles.footer_box}>
        {/* 버튼 활성화 조건 : 현재 문항의 인덱스 + 1 === 정답 개수 + 오답 개수 */}
        {currentQuestionIndex + 1 ===
          correctAnswerLength + incorrectAnswerLength &&
          (questionList.length > currentQuestionIndex + 1 ? (
            <Button
              onClick={() => {
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
              }}
            >
              다음 문제
            </Button>
          ) : (
            <Link to="/result">
              <Button onClick={() => saveCountTime()}>결과 보기</Button>
            </Link>
          ))}

        <div className={styles.footer_contents}>
          <div className={styles.timer}>⏰ {formatTimer(timer)}</div>
          <div className={styles.question_length}>
            {currentQuestionIndex + 1} / 10
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QuizComponent;
