import React from "react";
import styles from "./payment.module.css";
import Image from "next/image";
import picc from "../../public/heroImg.png";

const Payment = () => {
  return (
    <div className={styles.paymentContainer}>
      <div className={styles.paymentPic}>
        <Image src={picc} alt="image" width={600} height={400} />
      </div>

      <div className={styles.paymentWriteUp}>
        <h1 className={styles.paymentH1}>
          Our Superpower: <br /> Assessing a <br /> Client`s <br /> Ability to
          pay
        </h1>
        <p className={styles.paymentP}>
        Our proprietary credit analytics engine is our secret weapon. We use <br /> it to instantly assess a patient’s ability to pay by evaluating over <br /> 200 attributes that are designed to optimize approvals and reduce risk in <br />each healthcare segment we serve.
        </p>
      </div>
    </div>
  ); 
};

export default Payment;
