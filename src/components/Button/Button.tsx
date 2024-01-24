import styles from "./Button.module.css";

type buttonProps = {
  onClick?: () => void;
  children: string;
};

const Button: React.FC<buttonProps> = ({ onClick, children }) => {
  return (
    <button className={styles.quiz_start_button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
