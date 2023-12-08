import styles from "./NavbarLight.module.scss";

import NavMenu from "./NavMenu";
import Logo from "./Logo";
import NavIcons from "./NavIcons";

function NavbarLight() {
  return (
    <div className={styles.navbarLight}>
      <Logo />
      <NavMenu />
      <NavIcons />
    </div>
  );
}

export default NavbarLight;
