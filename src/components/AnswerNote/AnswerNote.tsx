import React, { useEffect, useState } from "react";

import { answerNoteDataType } from "../../type/answerNoteDataType";

import Question from "../Quiz/components/Question";
import AnswerButton from "../Answer/AnswerButton";
import Textarea from "../Textarea/Textarea";

import styles from "./AnswerNote.module.css";

type answerNoteProps = {
  data: answerNoteDataType;
  currentQuestionIndex: number;
  children?: React.ReactNode;
};

const AnswerNote: React.FC<answerNoteProps> = ({
  data,
  currentQuestionIndex,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  const [isToggle, setIsToggle] = useState<boolean>(false);

  // init isToggle state
  useEffect(() => {
    setIsToggle(false);
    setSelectedAnswer("");
  }, [currentQuestionIndex]);

  return (
    <>
      <Question>{data.question}</Question>

      <div className={styles.quiz_answer_box}>
        {data.answer_list.map((answer: string, index: number) => (
          <AnswerButton
            key={index}
            onClick={(): void => setSelectedAnswer(answer)}
            isActived={answer === selectedAnswer}
            isDisabled={false}
          >
            {answer}
          </AnswerButton>
        ))}
      </div>

      <div className={styles.quiz_note_answer_box}>
        {selectedAnswer && (
          <div
            className={
              data.correct_answer === selectedAnswer
                ? styles.correct_answer
                : styles.incorrect_answer
            }
          >
            {data.correct_answer === selectedAnswer
              ? "정답이에요! 😚"
              : "다시 한번 고민해 보세요 🤔"}
          </div>
        )}
        <div
          className={styles.quiz_note_toggle_box}
          onClick={(): void => setIsToggle(!isToggle)}
        >
          {isToggle
            ? "🔧 여기를 닫고 문제를 다시 풀어볼까요?"
            : "✅ 여기를 눌러 정답을 확인해 보세요"}
        </div>

        {isToggle && (
          <table className={styles.toggle_border_box}>
            <tr>
              <th className={styles.toggle_title}>정답 :</th>
              <td>{data.correct_answer}</td>
            </tr>
            <tr>
              <th className={styles.toggle_title}>내가 골랐던 정답 :</th>
              <td>{data.selected_answer}</td>
            </tr>
            <div></div>
          </table>
        )}

        {/* 풀이과정 메모 Textarea */}
        <Textarea currentQuestionIndex={currentQuestionIndex} id={data.id} />
      </div>
    </>
  );
};

export default AnswerNote;
