import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import styles from "./NavMenu.module.scss";
import LoginRegisterLinks from "../LoginRegisterLinks";
import Button from "../Button";
import { logout } from "../../store/reducers/auth";

import { useDispatch } from "react-redux";
import { routes } from "../../router/constants";

function NavMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  function handleLogout() {
    dispatch(logout());
    navigate(routes.HOME);
  }

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
      {token ? (
        <>
          <Button onClick={handleLogout}>Logout</Button>
        </>
      ) : (
        <>
          <LoginRegisterLinks />
        </>
      )}
    </ul>
  );
}

export default NavMenu;
