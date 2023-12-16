import styles from "./Content.module.scss";

function Content() {
  return (
    <div className={styles.content}>
      <header className={styles.header}>
        <h5>Featured Products</h5>
        <h2 className={styles.h2}>We love what we do</h2>
        <p className={styles.p}>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
        <p className={styles.p}>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </header>
      <div className={styles.imgs}>
        {[1, 2].map((el) => (
          <img
            src={`imgs/contents/${el}.jfif`}
            alt=""
            className={styles.img}
            key={el}
          />
        ))}
      </div>
    </div>
  );
}

export default Content;
