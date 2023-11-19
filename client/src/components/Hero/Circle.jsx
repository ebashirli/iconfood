import styles from "./Circle.module.scss";

// eslint-disable-next-line react/prop-types
function Circle({ type }) {
  return <div className={styles[type]}></div>;
}

export default Circle;
