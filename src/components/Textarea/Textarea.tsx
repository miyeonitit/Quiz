import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Textarea.module.css";

const Textarea: React.FC = () => {
  const location = useLocation();

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const [memoText, setMemoText] = useState<string>("");

  useEffect(() => {
    const currentPath = location.pathname;

    const handleResizeHeight = (ref: HTMLTextAreaElement) => {
      ref.style.height = "auto"; //height 초기화
      ref.style.height = ref.scrollHeight + "px";
    };

    if (currentPath === "/note" && textareaRef.current) {
      handleResizeHeight(textareaRef.current);
    }
  }, [memoText]);

  return (
    <div className={styles.quiz_note_box}>
      <div className={styles.quiz_note_title}>📝 풀이과정을 메모해 보세요!</div>
      <textarea
        className={styles.quiz_note_textarea}
        onChange={(e) => setMemoText(e.target.value)}
        ref={textareaRef}
        rows={4}
      />
    </div>
  );
};

export default Textarea;
