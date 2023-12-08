import Base from "../components/Base";
import styles from "./PageNotFound.module.scss";

function PageNotFound() {
  return (
    <Base>
      <div className={styles.container}>404</div>;
    </Base>
  );
}

export default PageNotFound;
