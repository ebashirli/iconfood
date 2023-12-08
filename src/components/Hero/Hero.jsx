import Button from "../Button";
import Circles from "./Circles";

import styles from "./Hero.module.scss";
function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.header}>
        <h3 className={styles.h}>SUMMER 2020</h3>
        <h4 className={styles.headline}>Our First Bakery</h4>
        <p className={styles.p}>
          We know how large objects will act, but things on a small scale.
        </p>
        <Button className={styles.button}>shop now</Button>
      </div>
      <div className={styles.imgCombine}>
        <img src="hero/technology-1.png" alt="Donat" className={styles.img} />
        <Circles />
      </div>
    </div>
  );
}

export default Hero;
