import { NavLink, useLocation } from "react-router-dom";

import styles from "./NavMenu.module.scss";
import { useMediaQuery } from "react-responsive";

function NavMenu() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  const { pathname } = useLocation();
  const isProduct = pathname === "/product";

  let menuList = isProduct
    ? [
        { label: "Home", path: "" },
        { label: "Product", path: "products" },
        { label: "Pricing", path: "pricing" },
        { label: "Contact", path: "contact" },
        { label: "Shop", path: "shop" },
        { label: "About", path: "about" },
        { label: "Blog", path: "blog" },
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
      </ul>
    </div>
  );
}

export default NavMenu;
