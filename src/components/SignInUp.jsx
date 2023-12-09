import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import styles from "./SignInUp.module.scss";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { login, register } from "../store/reducers/auth";
import { routes } from "../utils/constants";

export default function SignInUp({ isLogin }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({
    username: "Elvin Bashirli",
    email: "ebashirli@iconfood.az",
    password: "123456",
  });

  const handleChange = (e) => {
    setInputData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !inputData.email ||
      !inputData.password ||
      (!isLogin && !inputData.username)
    )
      return;

    dispatch(isLogin ? login(inputData) : register(inputData));
    navigate(routes.HOME);
  };

  return (
    <section className={styles.login}>
      <header>
        {isLogin ? (
          <h3>Welcome Back</h3>
        ) : (
          <>
            <h3>Sign up for free</h3>
            <p>Try everything free for 30 days, no payment details required</p>
          </>
        )}
      </header>
      <main>
        <Button className={styles.facebook}>
          <img src="header/facebook.svg" alt="" className={styles.fbIcon} />
          <span>Facebook</span>
        </Button>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formDivider}>
            <div className={styles.formDividerLine}></div>
            <p className={styles.formDividerText}>OR</p>
            <div className={styles.formDividerLine}></div>
          </div>

          {!isLogin && (
            <div className={styles.row}>
              <label htmlFor="username">Name *</label>
              <input
                type="name"
                id="username"
                name="username"
                onChange={handleChange}
                placeholder="Full Name *"
                value={inputData.username}
              />
            </div>
          )}

          <div className={styles.row}>
            <label htmlFor="email">Email address *</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="example@gmail.com"
              value={inputData.email}
            />
          </div>

          <div className={styles.row}>
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              placeholder="Password *"
              value={inputData.password}
            />
          </div>

          <div>
            <Button className={styles.submit}>Get Started</Button>
          </div>
        </form>

        {!isLogin && (
          <p className={styles.policy}>
            By filling in the form above and clicking the “Get Started” button,
            you accept and agree to Terms of Service and privacy Policy.
          </p>
        )}
        <div className={styles.hasAccount}>
          {isLogin ? "Don't you have an account?" : "Already have an account?"}
          <Link to={isLogin ? "/register" : "/login"} className={styles.signin}>
            {isLogin ? "SignUp" : "Sign in"}
          </Link>
        </div>
      </main>
    </section>
  );
}

SignInUp.propTypes = {
  isLogin: PropTypes.bool,
};
