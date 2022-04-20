import React from "react";
import styles from "./offers.module.css";
import Image from "next/image";
import archive from "../../public/archive.png";
import syringe from "../../public/syringe.png";
import cat from "../../public/cat.png";
import logo from "../../public/logo.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const Offers = () => {
  return (
    <div className={styles.offersContainer}>
      <IconContext.Provider value={{ className: "offersIcons" }}>
        <div className={styles.cardd}>
          <h3 className={styles.offersH3}>Providers</h3>
          <Image src={archive} alt="providers" height={150} width={150} />

          <div className={styles.butt}>
            <BsFillArrowRightCircleFill />
            <button className={styles.buttin}>explore</button>
          </div> 
        </div>
        <div className={styles.cardd}>
          <h3 className={styles.offersH3}>Vaccination</h3>
          <Image src={syringe} alt="providers" height={150} width={150} />

          <div className={styles.butt}>
            <BsFillArrowRightCircleFill />
            <button className={styles.buttin}>explore</button>
          </div>
        </div>
        <div className={styles.cardd}>
          <h3 className={styles.offersH3}> Handlers</h3>
          <Image src={cat} alt="providers" height={150} width={150} />

          <div className={styles.butt}>
            <BsFillArrowRightCircleFill />
            <button className={styles.buttin}>explore</button>
          </div>
        </div>
        <div className={styles.cardd}>
          <h3 className={styles.offersH3}>Grooming</h3>
          <Image src={logo} alt="providers" height={150} width={150} />

          <div className={styles.butt}>
            <BsFillArrowRightCircleFill />
            <button className={styles.buttin}>explore</button>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Offers;
