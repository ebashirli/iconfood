import { useMediaQuery } from "react-responsive";

import Button from "../Button";
// import Circles from "./Circles";

import styles from "./Hero.module.scss";
function Hero() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1000px)",
  });

  const imgSrc =
    "imgs/hero/" + (isDesktop ? "hero-cover-1.png" : "col-md-6.png");

  return (
    <div className={styles.hero}>
      <div className={styles.header}>
        <h3 className={styles.h}>SUMMER 2020</h3>
        <h4 className={styles.headline}>
          {isDesktop ? "Special Bread" : "Our First Bakery"}
        </h4>
        <p className={styles.p}>
          We know how large objects will act, but things on a small scale.
        </p>
        <Button className={styles.button}>shop now</Button>
      </div>
      <img src={imgSrc} alt="" className={styles.img} />
    </div>
  );
}

export default Hero;
