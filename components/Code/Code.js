import React from "react";
import styles from "./code.module.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import {IconContext} from 'react-icons'
const Code = () => {
  return (
    <div className={styles.codeContainer}>
      <div className={styles.opaque}>
        <div className={styles.writeups}>
          <h1 className={styles.codeH1}>
            We`ve <br /> cracked the <br /> code on serving <br /> the
            underserved
          </h1>
          <p className={styles.codeP}>
            There`s no longer a need for providers to turn <br />
            away patients, offer multiple finance solutions, or try to manage
            in-house payment plans.
          </p>
        </div>
        <div className={styles.cards}>
            <IconContext.Provider value={{ className: 'codeicons'}}>
          <div className={styles.codeCard}>
            <AiOutlineCheckCircle />
            <p className="cardP">
            Most patients will get approved. Our plans are very flexible
            </p>
          </div>
          <div className={styles.codeCard}>
            <AiOutlineCheckCircle />
            <p className="cardP"> 
            We know how to assess a patient`s ability to pay. #considerate
            </p>
          </div>
          <div className={styles.codeCard}>
            <AiOutlineCheckCircle />
            <p className="cardP">
            Customize your own scheme (no one-size-fits-all approach with us)
            </p>
          </div>
          <div className={styles.codeCard}>
            <AiOutlineCheckCircle />
            <p className="cardP">
            Complete loan servicing and collections, with affordable finance plans
            </p>
          </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Code;
