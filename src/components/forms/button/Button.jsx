import styles from "./Button.module.css";

const Button = ({ children, fullWidth }) => {
  return <button className={`${styles.button} ${fullWidth && styles.fullWidth}`}>{children}</button>;
};

export default Button;
