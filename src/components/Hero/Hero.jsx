//import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Anthony Rankin                   
                </h1>
                <p className={styles.description}>
                Highly self-motivated, team player with strong organizational and interpersonal
                skills. Consistently learning new skills to grow professionally and personally.
                Eager to take on new roles, and not daunted by the unknown.
                </p>
                <a href="mailto:arankin789@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero Image of Me" className={styles.heroImg}></img>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}