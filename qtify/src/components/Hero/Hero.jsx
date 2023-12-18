import React from "react";
import styles from "./Hero.module.css";
import Vibratingheadphone from "../../assests/vibrating-headphone.svg";
function Hero({placeholder}){
return (
    <div className={styles.wrapper}>
        <div className={styles.herotxt}>
        <h1>
        100 Thousand Songs, ad-free
        Over thousands podcast episodes
        </h1>
        </div>
        <div>
        <img src={Vibratingheadphone} alt="Headphone Icon"/>
        </div>
    </div>
)
}
export default Hero;