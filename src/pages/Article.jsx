import Base from "../components/Base";
import styles from "./Article.module.scss";

function Article() {
  return (
    <Base>
      <div className={styles.container}>Article</div>;
    </Base>
  );
}

export default Article;
