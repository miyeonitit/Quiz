import styles from "./AnswerButton.module.css";

type answerButtonProps = {
  onClick?: () => void;
  children: string;
};

const AnswerButton: React.FC<answerButtonProps> = ({ onClick, children }) => {
  return (
    <button className={styles.quiz_start_button} onClick={onClick}>
      {children}
    </button>
  );
};

export default AnswerButton;
