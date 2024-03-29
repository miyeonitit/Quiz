import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { questionListType } from "../../../type/questionListType";
import { answerNoteData } from "../../../store/answerNoteStore";
import { correctAnswer, incorrectAnswer } from "../../../store/answerStore";
import { updateAnswerNoteData } from "../../../utils/updateAnswerNoteData";

import AnswerResult from "./AnswerResult";
import AnswerButton from "../../Answer/AnswerButton";

import styles from "./QuestionAnswer.module.css";
import Question from "./Question";

type quizComponentProps = {
  data: questionListType;
  currentQuestionIndex: number;
};

const QuestionAnswer: React.FC<quizComponentProps> = ({
  data,
  currentQuestionIndex,
}) => {
  // recoil 상태 관리 - 정답 개수, 오답 개수 저장
  const setCorrectAnswer = useSetRecoilState(correctAnswer);
  const setIncorrectAnswer = useSetRecoilState(incorrectAnswer);

  // recoil 상태 관리 - 오답노트를 위한 문제와 정답 정보 저장
  const answerNoteListData = useRecoilValue(answerNoteData);
  const setAnswerNoteListData = useSetRecoilState(answerNoteData);

  // 4지선다형 답안을 담는 배열 state
  const [answerList, setAnswerList] = useState<string[]>([]);

  // 정답: correct <> 오답: incorrect 을 구별하는 state
  const [rate, setRate] = useState<string>("");

  // 선택한 답을 저장하는 state
  const [selectedAnswer, setSelectedAnswer] = useState<string | number>("");

  const checkAnswer = (answer: string) => {
    if (answer === data.correct_answer) {
      // 정답일 경우
      setRate("correct");
      setCorrectAnswer((prevCorrect) => prevCorrect + 1);
    } else {
      // 오답일 경우
      setRate("incorrect");
      setIncorrectAnswer((prevIncorrect) => prevIncorrect + 1);

      // 오답노트에 보내기 위한 data list를 가공하여 recoil 상태관리에 저장
      setAnswerNoteListData(
        updateAnswerNoteData(data, answerList, answer, answerNoteListData)
      );
    }

    // 선택한 답 저장
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
  }, [data]);

  useEffect(() => {
    // 선택했던 답 초기화
    setRate("");
    setSelectedAnswer("");
  }, [currentQuestionIndex]);

  return (
    <div className={styles.quiz_question_wrapper}>
      <Question>{data.question}</Question>

      {/* 4지선다형 답안 컴포넌트 */}
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

      {/* 선택한 답안에 대한 정답, 오답 안내 컴포넌트 */}
      {rate && selectedAnswer && (
        <div
          className={styles.quiz_question_result_box}
          data-cy="aboutAnswerInfoBox"
        >
          <AnswerResult rate={rate} correctAnswer={data.correct_answer} />
        </div>
      )}
    </div>
  );
};

export default QuestionAnswer;
