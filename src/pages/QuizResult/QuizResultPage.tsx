import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { correctAnswer, incorrectAnswer } from "../../store/answerStore";

import Confetti from "../../components/Confetti/Confetti";
import QuizResultComponent from "../../components/Quiz/QuizResultComponent";

const QuizResultPage: React.FC = () => {
  const navigate = useNavigate();

  // recoil 상태 관리 - 정답 개수, 오답 개수
  const correctAnswerLength = useRecoilValue(correctAnswer);
  const incorrectAnswerLength = useRecoilValue(incorrectAnswer);

  // useEffect(() => {
  //   if (!correctAnswerLength && !incorrectAnswerLength) {
  //     alert("처음부터 퀴즈를 풀어주세요!");
  //     navigate("/");
  //   }
  // }, [correctAnswerLength, incorrectAnswerLength]);

  return (
    <>
      {/* 퀴즈 결과 컴포넌트 */}
      <QuizResultComponent />

      {/* confetti(빵빠레) 애니메이션 컴포넌트 */}
      <Confetti />
    </>
  );
};

export default QuizResultPage;
