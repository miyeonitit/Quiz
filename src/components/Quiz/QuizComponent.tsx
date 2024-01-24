import React, { useEffect, useState } from "react";

import { questionListType } from "../../type/questionListType";

import AnswerButton from "../Answer/AnswerButton";

import styles from "./QuizComponent.module.css";

type quizComponentProps = {
  data: questionListType;
};

const QuizComponent: React.FC<quizComponentProps> = ({ data }) => {
  // 4지선다형 답안 배열
  const [answerList, setAnswerList] = useState<string[]>([]);

  // 정답: correct <> 오답: incorrect
  const [rate, setRate] = useState<string>("");

  // 선택한 답
  const [selectedAnswer, setSelectedAnswer] = useState<string | number>("");

  const checkAnswer = (answer: string) => {
    if (answer === data.correct_answer) {
      // 정답일 경우
      setRate("correct");
    } else {
      // 오답일 경우
      setRate("incorrect");
    }

    setSelectedAnswer(answer);
  };

  useEffect(() => {
    // 0부터 3까지의 랜덤 정수 생성
    const RANDOM_INDEX = Math.floor(Math.random() * 4);

    // 4지선다형 답안 배열 데이터 가공
    // correct_answer와 incorrect_answers를 합쳐 랜덤 순서 가공 -> 원본 data 배열에 저장됨
    data.incorrect_answers.splice(RANDOM_INDEX, 0, data.correct_answer);

    // 데이터 가공 전 <> 후가 화면에 렌더링되는 이슈로 setState
    setAnswerList(data.incorrect_answers);

    // 선택한 답 초기화
    setRate("");
    setSelectedAnswer("");
  }, [data]);

  return (
    <div className={styles.quiz_question_wrapper}>
      <div className={styles.quiz_question_box}>
        <h1 className={styles.quiz_question_mark}>Q.</h1>
        <h1>{data.question}</h1>
      </div>

      <div className={styles.quiz_answer_box}>
        {answerList.map((answer: string) => (
          <AnswerButton
            key={answer}
            onClick={() => checkAnswer(answer)}
            isActived={answer === selectedAnswer}
            isDisabled={!!rate}
          >
            {answer}
          </AnswerButton>
        ))}
      </div>

      {rate && (
        <div className={styles.quiz_question_result_box}>
          {rate === "correct" ? (
            <div className={styles.quiz_question_result}>
              <div className={styles.quiz_question_correct}>정답</div>
              <div className={styles.quiz_question_result_text}>
                정답이에요! 다음 문제도 풀어보아요 ✨
              </div>
            </div>
          ) : (
            <div className={styles.quiz_question_result}>
              <div className={styles.quiz_question_incorrect}>오답</div>
              <div className={styles.quiz_question_result_text}>
                오답이에요. 정답은{" "}
                <span className={styles.bold_tag}>{data.correct_answer}</span>{" "}
                이었어요.
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
