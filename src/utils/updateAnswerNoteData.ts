import uuid from "react-uuid";
import { doc, setDoc } from "firebase/firestore";

import { db } from "../lib/firebase";
import { questionListType } from "../type/questionListType";
import { answerNoteDataType } from "../type/answerNoteDataType";

export const updateAnswerNoteData = (
  data: questionListType,
  answerList: string[],
  selectedAnswer: string,
  answerNoteListData: answerNoteDataType[]
): answerNoteDataType[] => {
  const randomId = uuid().split("-")[0];

  const currentQuestionData: answerNoteDataType = {
    id: randomId,
    question: data.question,
    answer_list: answerList,
    correct_answer: data.correct_answer,
    selected_answer: selectedAnswer,
  };

  // firebase DB에 저장
  setDoc(doc(db, "quiz", `question ${randomId}`), currentQuestionData);

  // 이전 문제부터 현재 문제까지 순서대로 저장
  const AllQuestionData = [...answerNoteListData, currentQuestionData];

  return AllQuestionData;
};
