import React from "react";
import styles from "./form.module.css";
import Image from "next/image";
import pic from "../../public/secondimage.png";
import picc from "../../public/upset.png";

const Form = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.whitee}>
        <div className={styles.picz}>
          <Image src={picc} alt="imageOne" width={600} height={600} /> 
        </div>
        <div className={styles.form}>
          <h1 className={styles.formH1}>Let`s Partner!</h1>
          <p className={styles.formP}>
            Talk with one of our team members to see how <br /> we can help you
            approve more patients.
            <br /> Together we can provide more care for more people.
          </p>
          <br />
          <form action="#" method="POST" className={styles.form}>
              <div className={styles.formInputs}>
            <input id="name" type="text" autoComplete="name" placeholder="First Name" required className={styles.input} />
            <input id="name" type="text" autoComplete="name" placeholder="Last Name" required className={styles.input} />
            </div>
            <br />
              <div className={styles.formInputs}>
            <input id="name" type="email" autoComplete="email" placeholder="Email" required className={styles.input} />
            <input id="name" type="text" autoComplete="name" placeholder="Type of Pet" required className={styles.input} />
            </div>
            <button type="submit" className={styles.button}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
