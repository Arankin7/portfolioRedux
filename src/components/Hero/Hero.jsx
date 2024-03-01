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
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum doloribus, nemo soluta sint vitae quo voluptates eius saepe tempora blanditiis delectus corporis natus officiis minima suscipit modi ea quaerat nostrum rem at consequuntur est atque voluptas eum. Quam eaque corrupti, dolores facilis velit beatae eum ratione dolore cumque ea placeat.
                </p>
                <a href="mailto:arankin789@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero Image of Me" className={styles.heroImg}></img>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}