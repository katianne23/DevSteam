import styles from "./Input.module.css";

const Input = ({ fullWidth, ...props }) => {
  return (
    <input 
        className={`${styles.input} ${fullWidth && styles.fullWidth}`} 
        {...props}
    />
  );
};

export default Input;
