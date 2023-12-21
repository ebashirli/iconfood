import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import styles from "./LoginRegisterLinks.module.scss";
import { logout } from "../../store/reducers/auth";
import { routes } from "../../utils/constants";

import Button from "../Button";

function LoginRegisterLinks({ className }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
    navigate(routes.HOME);
  }
  const { token } = useSelector((state) => state.auth);
  return token ? (
    <Button onClick={handleLogout}>Logout</Button>
  ) : (
    <div className={styles.container + " " + className}>
      <img src="imgs/header/profile.svg" alt="" />
      <div className={styles.links}>
        <NavLink to="/login">Login</NavLink>
        <span> / </span>
        <NavLink to="/register">Register</NavLink>
      </div>
    </div>
  );
}

export default LoginRegisterLinks;
