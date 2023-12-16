import Logo from "../Header/Logo";
import InputWithButton from "../InputWithButton";
import styles from "./Footer.module.scss";
import MenuCard from "./MenuCard";

const menuCards = [
  {
    id: 1,
    title: "Company Info",
    items: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  {
    id: 2,
    title: "Legal",
    items: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  {
    id: 3,
    title: "Features",
    items: [
      "Business Marketing",
      "User Analytic",
      "Live Chat",
      "Unlimited Support",
    ],
  },
  {
    id: 4,
    title: "Resources",
    items: ["IOS & Android", "Watch a Demo", "Customers", "API"],
  },
];

function Footer({ className }) {
  return (
    <footer className={`${styles.footer} ${className}`}>
      <header className={styles.header}>
        <Logo />
        <div className={styles.social}>
          <img src="imgs/footer/ant-design_facebook-filled.svg" alt="" />
          <img src="imgs/footer/ant-design_instagram-outlined.svg" alt="" />
          <img src="imgs/footer/ant-design_twitter-outlined.svg" alt="" />
        </div>
      </header>
      <menu className={styles.menu}>
        {menuCards.map((card) => (
          <MenuCard {...card} key={card.id} />
        ))}

        <div className={styles.cta}>
          <InputWithButton
            className={styles.cta}
            title="Get In Touch"
            placeholder="Your Email"
            submitText="Subscribe"
            errorText="Lore imp sum dolor Amit"
          />
        </div>
      </menu>
      <footer className={styles.copyright}>
        <p>Made With Love By Finland All Right Reserved </p>
      </footer>
    </footer>
  );
}

export default Footer;
