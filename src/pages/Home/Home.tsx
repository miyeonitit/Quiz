import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useTimer } from "../../components/Provider/TimerContextProvider";

import Button from "../../components/Button/Button";

import styles from "./Home.module.css";

import logo from "../../assets/logo/nyang_foot.png";

const Home = () => {
  const { resetTimer } = useTimer();

  useEffect(() => {
    resetTimer();
  }, []);

  return (
    <div className={styles.home_wrapper}>
      <div className={styles.home_title_box}>
        <h1>
          알쏭달쏭 <span className={styles.bold_tag}>동물 퀴즈</span>를
          풀어볼까요?
        </h1>
      </div>

      <div className={styles.home_logo_image_box}>
        <img
          src={logo}
          className={styles.home_logo_image}
          alt="quiz-app-logo-image"
        />
      </div>

      <footer>
        <Link to="/quiz">
          <Button data-cy="quizStartButton">클릭하여 퀴즈 풀기</Button>
        </Link>

        <div className={styles.footer_tag}>Quiz-app</div>
      </footer>
    </div>
  );
};

export default Home;
