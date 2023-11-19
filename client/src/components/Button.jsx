import styles from "./Button.module.scss";

function Button({ children, className }) {
  return (
    <button className={`${className} ${styles.button}`}>{children}</button>
  );
}

export default Button;
