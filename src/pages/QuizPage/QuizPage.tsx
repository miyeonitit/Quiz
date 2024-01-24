import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { countTimer } from "../../store/timerStore";
import { correctAnswer, incorrectAnswer } from "../../store/answerStore";
import { formatTimer } from "../../utils/formatTimer";
import { questionListType } from "../../type/questionListType";
import { useTimer } from "../../components/Provider/TimerContextProvider";

import Button from "../../components/Button/Button";
import QuizComponent from "../../components/Quiz/QuizComponent";
import FetchingDataLoading from "../../components/Loading/FetchingDataLoading";

import styles from "./QuizPage.module.css";

const QuizPage: React.FC = () => {
  const { timer } = useTimer();

  // recoil 상태 관리 - 정답 개수, 오답 개수
  const correctAnswerLength = useRecoilValue(correctAnswer);
  const incorrectAnswerLength = useRecoilValue(incorrectAnswer);

  // recoil 상태 관리 - 현재 카운트된 time 저장
  const setCountTimer = useSetRecoilState(countTimer);

  // API response data를 담는 state
  const [questionList, setQuestionList] = useState<questionListType[]>([]);

  // 문제 순서를 조절하는 index state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const baseURL = process.env.REACT_APP_API_BASE_URL;

  const saveCountTime = () => {
    setCountTimer(formatTimer(timer));
  };

  const fetchingData = async () => {
    try {
      const res = await fetch(
        `${baseURL}/api.php?amount=10&category=27&type=multiple`
      );

      const data = await res.json();

      setQuestionList(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <>
      {questionList?.length ? (
        <div className={styles.quiz_page_wrapper}>
          <QuizComponent
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
      ) : (
        <FetchingDataLoading />
      )}
    </>
  );
};

export default QuizPage;
