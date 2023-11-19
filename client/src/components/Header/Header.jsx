import styles from "./Header.module.scss";
import NavbarDark from "./NavbarDark";
import NavbarLight from "./NavbarLight";

function Header() {
  return (
    <header className={styles.header}>
      <NavbarDark />
      <NavbarLight />
    </header>
  );
}
export default Header;
