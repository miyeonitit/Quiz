import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { getDoc, doc } from "firebase/firestore";

import { db } from "../../lib/firebase";
import { answerNoteData } from "../../store/answerNoteStore";
import { incorrectAnswer } from "../../store/answerStore";

import SubTitle from "../../components/SubTitle/SubTitle";
import Question from "../../components/Quiz/components/Question";

import styles from "./AnswerNote.module.css";
import AnswerButton from "../../components/Answer/AnswerButton";

const AnswerNote: React.FC = () => {
  const navigate = useNavigate();

  const docRef = doc(db, "quiz", "question");

  // recoil 상태 관리 -  오답 개수
  const incorrectAnswerLength = useRecoilValue(incorrectAnswer);

  // recoil 상태 관리 - 오답노트를 위한 문제와 정답 정보 저장
  const answerNoteListData = useRecoilValue(answerNoteData);
  const setAnswerNoteListData = useSetRecoilState(answerNoteData);

  // 문제 순서를 조절하는 index state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  useEffect(() => {
    if (!incorrectAnswerLength && !answerNoteListData) {
      alert("처음부터 퀴즈를 풀어주세요!");
      navigate("/");
    }

    async function getFruits() {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }

    getFruits();
    console.log(answerNoteListData, "answerNoteListData");
  }, []);

  // ToDo - 1. 결과페이지에 접근하자마자 데이터베이스에 업데이트
  // ToDo - 2. 페이지는 껍데기로
  // ToDo - 3. 컴포넌트로 분리
  // ToDo - 4. 데이터베이스로부터 정보 불러와서 오답노트 조회 및 메모필드 업데이트
  // ToDo - 5. 다 풀면  처음으로 가기 버튼

  return (
    <div className={styles.answer_note_wrapper}>
      <SubTitle>8개의 문제를 복습해 보아요</SubTitle>

      <div>
        <Question>등에 딱지 달린 동물은?</Question>

        <div>거북이</div>
        <div>고양이</div>
        <div>강아지</div>
        <div>코끼리</div>

        <div>정답: 거북이</div>
        <div>내가 고른 정답: 고양이</div>

        <div>
          <div>풀이과정을 메모해 보세요!</div>
          <textarea />
        </div>
      </div>
    </div>
  );
};

export default AnswerNote;
