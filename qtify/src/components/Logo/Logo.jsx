import React from "react";
import styles from "./Logo.module.css";
import { ReactComponent as HeadphoneIcon } from "../../assests/headphone.svg";

function Logo({ placeholder }) {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.icon}>
      <HeadphoneIcon/>
      </div>
      <div className={styles.text}>{placeholder}</div>
    </div>
  );
}

export default Logo;
