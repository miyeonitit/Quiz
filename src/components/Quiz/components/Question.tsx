import React from "react";

import styles from "./Question.module.css";

type chidrenProps = {
  children: React.ReactNode;
};

const Question: React.FC<chidrenProps> = ({ children }) => {
  return (
    <div className={styles.quiz_question_box}>
      <h2 className={styles.quiz_question_mark}>Q.</h2>
      <h2 data-cy="question" className={styles.quiz_question}>
        {children}
      </h2>
    </div>
  );
};

export default Question;
