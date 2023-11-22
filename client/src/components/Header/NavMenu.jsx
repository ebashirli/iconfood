import { NavLink } from "react-router-dom";
import styles from "./NavMenu.module.scss";
import LoginRegisterLinks from "../LoginRegisterLinks";

function NavMenu() {
  return (
    <ul className={styles.navMenu}>
      {[
        "Home",
        "Product",
        "Pricing",
        "Contact",
        "Shop",
        "About",
        "Blog",
        "Pages",
      ].map((el) => (
        <li className={styles.item} key={el}>
          <NavLink to={el.toLowerCase()}>{el}</NavLink>
        </li>
      ))}
      <LoginRegisterLinks />
    </ul>
  );
}

export default NavMenu;
