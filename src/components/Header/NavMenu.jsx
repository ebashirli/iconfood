import { Link, NavLink, useLocation } from "react-router-dom";

import styles from "./NavMenu.module.scss";
import { useMediaQuery } from "react-responsive";
import LoginRegisterLinks from "./LoginRegisterLinks";

function NavMenu() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  const { pathname } = useLocation();
  const isProduct = pathname === "/products";

  let menuList = isProduct
    ? [
        { label: "Home", path: "" },
        { label: "Shop", path: "products" },
        { label: "About", path: "about" },
        { label: "Blog", path: "blog" },
        { label: "Contact", path: "contact" },
        { label: "Pages", path: "pages" },
      ]
    : isDesktop
    ? [
        { label: "Home", path: "" },
        { label: "Shop", path: "products" },
        { label: "About", path: "about" },
        { label: "Blog", path: "blog" },
        { label: "Contact", path: "contact" },
        { label: "Pages", path: "pages" },
      ]
    : [
        { label: "Home", path: "" },
        { label: "Products", path: "products" },
        { label: "Pricing", path: "pricing" },
        { label: "Contact", path: "contact" },
      ];

  return (
    <div className={styles.container}>
      <ul className={styles.navMenu}>
        {menuList.map(({ label, path }) => (
          <li className={styles.item} key={label}>
            <NavLink to={path}>{label}</NavLink>
          </li>
        ))}

        {isProduct && !isDesktop && (
          <div className={styles.icons}>
            <LoginRegisterLinks className={styles.loginReg} />
            <ul className={styles.icons2}>
              {["search-2", "shopping-cart-2", "heart-2"].map((icon) => (
                <Link key={icon} className={styles.iconContainer}>
                  <img
                    src={`imgs/header/icn-${icon}-icn-xs.svg`}
                    alt={`${icon} icon`}
                    className={`${styles[icon]} ${styles.icon}`}
                  />
                  {icon !== "search-2" && (
                    <span className={styles.count}>1</span>
                  )}
                </Link>
              ))}
            </ul>
          </div>
        )}
      </ul>
    </div>
  );
}

export default NavMenu;
