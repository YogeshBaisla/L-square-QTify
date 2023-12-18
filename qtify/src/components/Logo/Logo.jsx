import React from "react";
import styles from "./Logo.module.css";
import headphoneSvg from "../../assests/headphone.svg";

function Logo({ placeholder }) {
  return (
    <div className={styles.logoContainer}>
      <img src={headphoneSvg} alt="Headphone Icon" className={styles.icon}/>
      <div className={styles.text}>{placeholder}</div>
    </div>
  );
}

export default Logo;
