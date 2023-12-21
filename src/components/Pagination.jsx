import Button from "./Button";
import styles from "./Pagination.module.scss";

function Pagination() {
  return (
    <div className={styles.container}>
      <Button className={styles.first + " " + styles.button}>First</Button>
      <Button
        className={styles.one + " " + styles.button + " " + styles.number}
      >
        1
      </Button>
      <Button
        className={styles.two + " " + styles.button + " " + styles.number}
      >
        2
      </Button>
      <Button
        className={styles.three + " " + styles.button + " " + styles.number}
      >
        3
      </Button>

      <Button className={styles.mext + " " + styles.button}>Next</Button>
    </div>
  );
}

export default Pagination;
