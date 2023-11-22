import styles from "./Header.module.scss";
import NavbarDark from "./NavbarDark";
import NavbarLight from "./NavbarLight";

function Header({ className }) {
  return (
    <header className={`${styles.header} ${className}`}>
      <NavbarDark />
      <NavbarLight />
    </header>
  );
}
export default Header;
