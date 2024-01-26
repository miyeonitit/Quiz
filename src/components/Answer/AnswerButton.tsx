import styles from "./AnswerButton.module.css";

type answerButtonProps = {
  onClick?: () => void;
  isActived: boolean;
  isDisabled: boolean;
  children: string | number;
};

const AnswerButton: React.FC<answerButtonProps> = ({
  onClick,
  isActived,
  isDisabled,
  children,
}) => {
  return (
    <button
      className={`${styles.quiz_start_button} ${isActived && styles.actived}`}
      onClick={onClick}
      disabled={isDisabled}
      data-cy="answerButton"
    >
      {children}
    </button>
  );
};

export default AnswerButton;
