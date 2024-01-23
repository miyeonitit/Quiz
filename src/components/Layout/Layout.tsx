import React from "react";

import styles from "./Layout.module.css";

type childrenProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: childrenProps) => {
  return (
    <div className={styles.layout_wrapper}>
      <div className={styles.layout_box}>{children}</div>
    </div>
  );
};

export default Layout;
