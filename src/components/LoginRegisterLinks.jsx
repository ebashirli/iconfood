import { NavLink } from "react-router-dom";
import styles from "./LoginRegisterLinks.module.scss";

function LoginRegisterLinks() {
  return (
    <div className={styles.container}>
      <img src="header/profile.svg" alt="" />
      <div>
        <NavLink to="/login">Login</NavLink>
        <span> / </span>
        <NavLink to="/register">Register</NavLink>
      </div>
    </div>
  );
}

export default LoginRegisterLinks;
