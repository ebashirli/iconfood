import Button from "./Button";
import styles from "./InputWithButton.module.scss";

function InputWithButton({
  className = null,
  title = null,
  placeholder = null,
  submitText = "Submit",
  errorText = null,
  withButton = true,
}) {
  return (
    <div className={styles.container + " " + className}>
      {title && <header className={styles.header}>{title}</header>}
      <form className="form">
        <input type="text" placeholder={placeholder} />

        {withButton && <Button className={styles.button}>{submitText}</Button>}
      </form>
      <p>{errorText}</p>
    </div>
  );
}

export default InputWithButton;
