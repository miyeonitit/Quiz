import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home_wrapper}>
      <div className={styles.home_title_box}>
        <h1>알쏭달쏭 퀴즈를 풀어볼까요?</h1>
      </div>

      <button className={styles.quiz_start_button}>클릭하여 퀴즈 풀기</button>

      <footer className={styles.footer_tag}>Quiz-app</footer>
    </div>
  );
};

export default Home;
