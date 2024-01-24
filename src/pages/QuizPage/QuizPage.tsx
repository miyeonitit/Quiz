import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { questionListType } from "../../type/questionListType";
import { formatTimer } from "../../utils/formatTimer";
import { useTimer } from "../../components/Provider/TimerContextProvider";

import Button from "../../components/Button/Button";
import QuizComponent from "../../components/Quiz/QuizComponent";

import styles from "./QuizPage.module.css";

const QuizPage: React.FC = () => {
  const { timer } = useTimer();

  const [questionList, setQuestionList] = useState<questionListType[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const baseURL = process.env.REACT_APP_API_BASE_URL;

  const checkAnswer = (answer: string) => {
    if (answer === questionList[currentQuestionIndex].correct_answer) {
      // 정답 개수
    } else {
      // 오답 개수
    }
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
          <QuizComponent data={questionList[currentQuestionIndex]} />

          <footer className={styles.footer_box}>
            {questionList.length > currentQuestionIndex + 1 ? (
              <Button
                onClick={() => {
                  setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
                }}
              >
                다음 문제
              </Button>
            ) : (
              <Link to="/result">
                <Button>결과 보기</Button>
              </Link>
            )}

            <div className={styles.footer_contents}>
              <div className={styles.timer}>⏰ {formatTimer(timer)}</div>
              <div className={styles.question_length}>
                {currentQuestionIndex + 1} / 10
              </div>
            </div>
          </footer>
        </div>
      ) : (
        <div className={styles.data_fetching_box}>
          <div className={styles.loading_spinner_box}>
            <div className={styles.loading_spinner} />
          </div>

          <h2>문제를 불러오고 있어요.</h2>
        </div>
      )}
    </>
  );
};

export default QuizPage;
