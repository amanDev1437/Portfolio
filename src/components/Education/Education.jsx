import React from "react";

import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("education/education.png")}
          alt="Me sitting with a book"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Master of Computer Applications</h3>
              <p>
                IGNOU, Delhi
              </p>
              <span>2026</span>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Bsc Computer Science</h3>
              <p>
                IIMT Groups of College, Greater Noida
              </p>
              <span>2023</span>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Class 12</h3>
              <p>
                BDSVM, Noida
              </p>
              <span>2020</span>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Class 10</h3>
              <p>
                Rani Revati Devi S V N I C, Prayagraj
              </p>
              <span>2018</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
