import styles from "./Button.module.css";

const Button = ({ children, fullWidth, ...props }) => {
  return <button className={`
        ${styles.button} 
        ${fullWidth && styles.fullWidth}`
      } {...props}>
        {children}
      </button>;
};

export default Button;
