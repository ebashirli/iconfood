import Circle from "./Circle";
import styles from "./Circles.module.scss";

function Circles() {
  return (
    <div className={styles.container}>
      {[
        "big",
        "small-white",
        "tiny-blue-right",
        "tiny-blue-left",
        "tiny-white",
      ].map((type) => (
        <Circle type={type} key={type} />
      ))}
    </div>
  );
}

export default Circles;
