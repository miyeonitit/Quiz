import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { answerNoteData } from "../../store/answerNoteStore";

import Button from "../Button/Button";
import AnswerNote from "./AnswerNote";
import SubTitle from "../SubTitle/SubTitle";

import styles from "./AnswerNoteFrame.module.css";

const AnswerNoteFrame: React.FC = () => {
  const navigate = useNavigate();

  // recoil 상태 관리 - 오답노트를 위한 문제와 정답 정보 저장
  const answerNoteListData = useRecoilValue(answerNoteData);

  // 문제 순서를 조절하는 index state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  return (
    <div className={styles.answer_note_wrapper}>
      <div className={styles.answer_note_box}>
        <SubTitle>
          {answerNoteListData.length === currentQuestionIndex + 1
            ? "마지막 문제입니다. 고생하셨어요! 👏"
            : `💡 ${
                answerNoteListData.length - currentQuestionIndex
              }개의 틀린 문제를 복습해요`}
        </SubTitle>
      </div>

      {/* 오답 문제와 답 컴포넌트 */}
      <AnswerNote
        data={answerNoteListData[currentQuestionIndex]}
        currentQuestionIndex={currentQuestionIndex}
      />

      {answerNoteListData.length === currentQuestionIndex + 1 ? (
        <Button onClick={() => navigate("/")}>다시 풀어보기</Button>
      ) : (
        <Button
          onClick={(): void => {
            setCurrentQuestionIndex(
              (prevIndex: number): number => prevIndex + 1
            );
          }}
        >
          다음 문제
        </Button>
      )}
    </div>
  );
};

export default AnswerNoteFrame;
