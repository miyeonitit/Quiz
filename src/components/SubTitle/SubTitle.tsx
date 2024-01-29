import React from "react";

import styles from "./SubTitle.module.css";

type childrenProps = {
  children: React.ReactNode;
};

const SubTitle: React.FC<childrenProps> = ({ children }) => {
  return <div className={styles.quiz_timer_infomation}>{children}</div>;
};

export default SubTitle;
