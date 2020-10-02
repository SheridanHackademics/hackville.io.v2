import React from "react";
import styles from "./sponsors.module.scss";
import Header from "../../images/headers/sponsors-header.svg";

const Sponsors = () => (
  <section id="sponsors" className={styles.section}>
    <div className={styles.header}>
      <img className={styles.headerImg} src={Header}></img>
      <p className={styles.headerMainText}>Sponsors</p>
    </div>
    <div className={styles.content}>
      <p>
        Thank you to all of our previous sponsors and partners.
      </p>
    </div>
  </section>
)

export default Sponsors;