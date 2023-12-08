import styles from "./NavbarDark.module.scss";

function NavbarDark() {
  return (
    <div className={styles.navbarDark}>
      <div className={styles.contact}>
        <div className={styles.phone}>
          <a href="tel:2255550118">
            <img src="header/phone.svg" alt="phone icon" />
            <span>(225) 555 0118</span>
          </a>
        </div>
        <div className={styles.mail}>
          <a href="mailto:michelle.rivera@example.com">
            <img src="header/email.svg" alt="mail icon" />
            <span>michelle.rivera@example.com</span>
          </a>
        </div>
      </div>
      <h6 className={styles.h6}>Follow Us and get a chance to win 80% off</h6>
      <div className={styles.social}>
        <h6>Follow Us :</h6>
        <ul className={styles.soialIcons}>
          {["instagram", "phone", "x", "youtube"].map((el) => (
            <li key={el}>
              <a href="#">
                <img src={`header/${el}.svg`} alt={`${el} icon`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavbarDark;
