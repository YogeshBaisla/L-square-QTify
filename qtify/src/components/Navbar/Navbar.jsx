import React from "react";
import Search from "../Button/Search/Search";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
   <div className={styles.wrapper}>
   <Logo placeholder={"Q tify"}/>
   <Search placeholder="search a album of your choice"/>
   <Button>Give Feedback</Button>
   </div>
  );
}

export default Navbar;
