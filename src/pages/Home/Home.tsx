import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import { useTimer } from "../../components/Provider/TimerContextProvider";
import { correctAnswer, incorrectAnswer } from "../../store/answerStore";
import { answerNoteData } from "../../store/answerNoteStore";

import QuizStartComponent from "../../components/Quiz/QuizStartComponent";

const Home = () => {
  const { resetTimer } = useTimer();

  // recoil 상태 관리 - 정답 개수, 오답 개수
  const setCorrectAnswerLength = useSetRecoilState(correctAnswer);
  const setIncorrectAnswerLength = useSetRecoilState(incorrectAnswer);
  const setAnswerNoteListData = useSetRecoilState(answerNoteData);

  useEffect(() => {
    // init timer, Recoil values in Home page
    resetTimer();
    setCorrectAnswerLength(0);
    setIncorrectAnswerLength(0);
    setAnswerNoteListData([]);
  }, [
    resetTimer,
    setCorrectAnswerLength,
    setIncorrectAnswerLength,
    setAnswerNoteListData,
  ]);

  return <QuizStartComponent />;
};

export default Home;
