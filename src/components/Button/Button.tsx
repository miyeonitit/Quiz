import styles from "./Button.module.css";

type buttonProps = {
  onClick?: () => void;
  "data-cy"?: string | null;
  children: string;
};

const Button: React.FC<buttonProps> = ({
  onClick,
  "data-cy": dataCypress,
  children,
}) => {
  return (
    <button
      className={styles.quiz_start_button}
      data-cy={dataCypress}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
