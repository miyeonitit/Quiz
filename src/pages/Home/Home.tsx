import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useTimer } from "../../components/Provider/TimerContextProvider";

import Button from "../../components/Button/Button";

import styles from "./Home.module.css";

const Home = () => {
  const { resetTimer } = useTimer();

  useEffect(() => {
    resetTimer();
  }, []);

  return (
    <div className={styles.home_wrapper}>
      <div className={styles.home_title_box}>
        <h1>알쏭달쏭 퀴즈를 풀어볼까요?</h1>
      </div>

      <Link to="/quiz">
        <Button>클릭하여 퀴즈 풀기</Button>
      </Link>

      <footer className={styles.footer_tag}>Quiz-app</footer>
    </div>
  );
};

export default Home;
