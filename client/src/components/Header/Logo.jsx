import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

function Logo() {
  return (
    <Link to="/">
      <div className={styles.logo}>
        <h1>Iconfood</h1>
      </div>
    </Link>
  );
}

export default Logo;
