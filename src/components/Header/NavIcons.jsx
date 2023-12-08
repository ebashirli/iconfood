import { Link } from "react-router-dom";
import styles from "./NavIcons.module.scss";

function NavIcons() {
  return (
    <div className={styles.icons}>
      {["shopping-cart", "search", "menu"].map((icon) => (
        <Link key={icon}>
          <img src={`header/icn-${icon}-icn-xs.svg`} alt={`${icon} icon`} />
        </Link>
      ))}
    </div>
  );
}

export default NavIcons;
