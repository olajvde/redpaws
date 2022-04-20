import Image from 'next/image'
import React from 'react'
import styles from './footer.module.css'
import logo from '../../public/loogo.png'
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <hr className={styles.hr}/>

        <div className={styles.bottom}>
          <div className='footerImg'>
              <Image src={logo} alt="Logo" />
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.linkList}>
              <h3>Company</h3>
              <a href="#">About us</a>
              <a href="#">What we do</a>
              <a href="#">Providers</a>
              <a href="#">Patients</a>
            </div>
            <div className={styles.linkList}>
            <h3>More</h3>
              <a href="#">Press</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Provider Login</a>
              <a href="#">Contact us</a>
            </div>
            <div className={styles.linkList}>
            <h3>Social Media</h3>
              <a href="#">LinkedIn</a>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a> 
            </div>
          </div>
        </div>
        <p className={styles.copy}>©Red Paws 2021. All rights reserved. Greenlight is a trademark of Red Paws Financial, Inc.</p>
    </div>
  )
}

export default Footer