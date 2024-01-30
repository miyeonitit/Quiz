import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import { useLocation } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";

import { db } from "../../lib/firebase";

import styles from "./Textarea.module.css";

type textareaProps = {
  currentQuestionIndex: number;
  id: string;
};

const Textarea: React.FC<textareaProps> = ({ currentQuestionIndex, id }) => {
  const location = useLocation();

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const [memoText, setMemoText] = useState<string>("");
  const [isUpdated, setIsUpdated] = useState<boolean>(false);

  // update momo field in Firebase DB
  const updateMemoValue = () => {
    const docRef = doc(db, "quiz", `question ${id}`);

    updateDoc(docRef, {
      memo: memoText,
    });

    setIsUpdated(true);
  };

  useEffect(() => {
    const currentPath = location.pathname;

    const handleResizeHeight = (ref: HTMLTextAreaElement) => {
      ref.style.height = "auto";
      ref.style.height = ref.scrollHeight + "px";
    };

    if (currentPath === "/note" && textareaRef.current) {
      handleResizeHeight(textareaRef.current);
    }
  }, [memoText]);

  // init value in textarea state
  useEffect(() => {
    setMemoText("");
    setIsUpdated(false);
  }, [currentQuestionIndex]);

  return (
    <div className={styles.quiz_note_box}>
      <div className={styles.quiz_note_title}>📝 풀이과정을 메모해 보세요!</div>

      <div className={styles.memo_box}>
        <textarea
          className={styles.quiz_note_textarea}
          value={memoText}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>): void =>
            setMemoText(e.target.value)
          }
          ref={textareaRef}
          rows={4}
        />

        {memoText && (
          <button
            className={styles.save_memo_text}
            onClick={() => updateMemoValue()}
          >
            저장
          </button>
        )}
      </div>

      {isUpdated && (
        <div className={styles.updated_status_infomation}>
          ✨ 풀이과정이 저장되었어요 ✨
        </div>
      )}
    </div>
  );
};

export default Textarea;
