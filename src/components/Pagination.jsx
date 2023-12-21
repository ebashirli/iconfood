import { useState } from "react";
import Button from "./Button";
import styles from "./Pagination.module.scss";

function Pagination() {
  const [selected, setSelected] = useState(1);
  return (
    <div className={styles.container}>
      <Button
        className={`${styles.first} ${styles.button} ${
          selected === 1 ? styles.notActive : ""
        }`}
        onClick={() => setSelected((s) => (s > 1 ? s - 1 : s))}
      >
        First
      </Button>

      {[1, 2, 3].map((n) => (
        <Button
          key={n}
          className={`${styles[`button-${n}`]} ${styles.button} ${
            styles.numberBotton
          } ${selected === n ? styles.selected : ""}`}
          onClick={() => setSelected(n)}
        >
          {n}
        </Button>
      ))}

      <Button
        className={styles.mext + " " + styles.button}
        onClick={() => setSelected((s) => (s < 3 ? s + 1 : s))}
      >
        Next
      </Button>
    </div>
  );
}

export default Pagination;
