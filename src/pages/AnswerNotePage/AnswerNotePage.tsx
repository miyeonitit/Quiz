import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { answerNoteData } from "../../store/answerNoteStore";
import { incorrectAnswer } from "../../store/answerStore";

import AnswerNoteFrame from "../../components/AnswerNote/AnswerNoteFrame";

const AnswerNotePage: React.FC = () => {
  const navigate = useNavigate();

  // recoil 상태 관리 -  오답 개수
  const incorrectAnswerLength = useRecoilValue(incorrectAnswer);

  // recoil 상태 관리 - 오답노트를 위한 문제와 정답 정보 저장
  const answerNoteListData = useRecoilValue(answerNoteData);

  useEffect(() => {
    if (!incorrectAnswerLength && answerNoteListData.length === 1) {
      alert("처음부터 퀴즈를 풀어주세요!");
      navigate("/");
    }
  }, []);

  return <AnswerNoteFrame />;
};

export default AnswerNotePage;
