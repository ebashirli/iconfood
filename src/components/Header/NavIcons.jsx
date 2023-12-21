import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from "./NavIcons.module.scss";
import LoginRegisterLinks from "./LoginRegisterLinks";

function NavIcons() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1000px)",
  });

  const { pathname } = useLocation();

  const isProduct = pathname === "/products";

  const productIcons = ["menu"];
  const mobileIcons = ["search", "shopping-cart", "menu"];
  const desktopIcons = ["search", "shopping-cart", "heart"];
  const icons = isDesktop
    ? desktopIcons
    : isProduct
    ? productIcons
    : mobileIcons;

  return (
    <div className={styles.icons}>
      <div>{isDesktop && <LoginRegisterLinks />}</div>
      {icons.map((icon) => (
        <Link key={icon} className={styles.iconContainer}>
          <img
            src={`imgs/header/icn-${icon}-icn-xs.svg`}
            alt={`${icon} icon`}
            className={`${styles[icon]} ${styles.icon}`}
          />
          {isDesktop && icon !== "search" && (
            <span className={styles.count}>1</span>
          )}
        </Link>
      ))}
    </div>
  );
}

export default NavIcons;
