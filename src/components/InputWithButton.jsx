import Button from "./Button";
import styles from "./InputWithButton.module.scss";

function InputWithButton({
  className = null,
  title = null,
  placeholder = null,
  submitText = "Submit",
  errorText = null,
}) {
  return (
    <div className={styles.container + " " + className}>
      <header className={styles.header}>{title}</header>
      <form>
        <input type="text" placeholder={placeholder} />
        <Button className={styles.button}>{submitText}</Button>
      </form>
      <p>{errorText}</p>
    </div>
  );
}

export default InputWithButton;
