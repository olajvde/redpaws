import React from "react";
import Image from "next/image";
import firstImage from "../../public/firstimage.png";
import secondImage from "../../public/heroImg.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroTop}>
        <div className={styles.heroText}>
          <h1 className={styles.heroH1}>
            Your Pet, <br /> Our Utmost Priority
          </h1>
          <p className={styles.heroP}>
            We help more pet owners access the healthcare <br /> they need for their
            pets, by offering affordable<br /> monthly payment options.
          </p>
        </div>
        <div className="firstImg">
          <Image src={firstImage} alt="imageOne" width={350} height={350} />
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
