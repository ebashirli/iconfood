import { useState } from "react";
import styles from "./SignInUp.module.scss";
import Base from "../components/Base";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { login, register } from "../api/auth";

export default function Signup({ isLogin }) {
  // PRE-FILL FOR DEV PURPOSES
  const [username, setUsername] = useState("Elvin Bashirli");
  const [email, setEmail] = useState("ebashirli@example.com");
  const [password, setPassword] = useState("qwerty");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await (isLogin
      ? login({ identifier: email, password })
      : register({ username, email, password }));
    console.log(result);
  };

  return (
    <Base
      headerClassName={styles.mainHeader}
      footerClassName={styles.mainFooter}
    >
      <section className={styles.login}>
        <header>
          {isLogin ? (
            <h3>Welcome Back</h3>
          ) : (
            <>
              <h3>Sign up for free</h3>
              <p>
                Try everything free for 30 days, no payment details required
              </p>
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
                <label htmlFor="name">Name *</label>
                <input
                  type="name"
                  id="name"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Full Name *"
                  value={username}
                />
              </div>
            )}

            <div className={styles.row}>
              <label htmlFor="email">Email address *</label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                value={email}
              />
            </div>

            <div className={styles.row}>
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password *"
                value={password}
              />
            </div>

            <div>
              <Button className={styles.submit}>Get Started</Button>
            </div>
          </form>

          {!isLogin && (
            <p className={styles.policy}>
              By filling in the form above and clicking the “Get Started”
              button, you accept and agree to Terms of Service and privacy
              Policy.
            </p>
          )}
          <div className={styles.hasAccount}>
            {isLogin
              ? "Don't you have an account?"
              : "Already have an account?"}
            <Link to={isLogin ? "/signup" : "/login"} className={styles.signin}>
              {isLogin ? "SignUp" : "Sign in"}
            </Link>
          </div>
        </main>
      </section>
    </Base>
  );
}
