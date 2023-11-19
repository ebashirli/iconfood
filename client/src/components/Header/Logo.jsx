import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

function Logo() {
  return (
    <Link to="/">
      <div className={styles.logo}>Iconfood</div>;
    </Link>
  );
}

export default Logo;
