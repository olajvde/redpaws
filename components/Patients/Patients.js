import React from "react";
import styles from "./patients.module.css";
import Image from "next/image";
import pic from "../../public/patient.png";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

const Patients = () => {
  return (
    <div className={styles.patientsContainer}>
      <div className={styles.white}>
        <div className="image">
          <Image src={pic} alt="imageOne" width={600} height={600} />
        </div>

        <div className={styles.writeUp}>
          <h1 className={styles.h1}>
            We Adore Our <br /> Patients
          </h1> 
          <p className={styles.p}>
            Many patients looking for care are turned away because of <br />{" "}
            increased out-of-pocket costs and unsophisticated credit algorithms.
            <br /> But that doesn’t have to be the case. It’s time to get more
            people the treatment they deserve.
          </p>
          <IconContext.Provider value={{ className: "card1-icon" }}>
            <div className={styles.card}>
              <AiOutlineCloseCircle />
              <p className="cardP">
                Traditional patient finance companies deny about 50% of credit
                applicants.
              </p>
            </div>
          </IconContext.Provider>
          <br />
          <IconContext.Provider value={{ className: "card1-icon" }}>
          <div className={styles.card2}>
            <AiOutlineCheckCircle />
            <p className="cardP">
              Traditional patient finance companies deny about 50% of credit
              applicants.
            </p>
          </div>
          </IconContext.Provider>

          <div className={styles.card3}>
          <button>Let`s Partner</button>
          </div>


          <div className={styles.button}>
          

          </div>
        </div>
      </div>
    </div>
  );
};

export default Patients;
