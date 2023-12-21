import styles from "./TagList.module.scss";
import Button from "../Button";

function TagList() {
  return (
    <div className={styles.container}>
      <h5>Popular tags</h5>
      <ul className={styles.ul}>
        {["Agatha (9)", "Tag", "Tag"].map((t, i) => (
          <Button className={styles.tagButton} key={t + i}>
            {t}
            <img src="/imgs/filter/close.svg" alt="" />
          </Button>
        ))}
      </ul>
    </div>
  );
}

export default TagList;
