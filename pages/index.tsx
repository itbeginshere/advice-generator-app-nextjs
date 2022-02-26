/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import { IAdvice } from "../types/IAdvice";

export default function Home() {
  const [advice, setAdvice] = useState<IAdvice>({
    advice:
      "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
    id: 117,
  });

  const handleButtonClick = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");

    const data = await res.json();

    setAdvice(data.slip);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Random Advice</title>
        <meta name="description" content="Best random advice app ever" />
        <link rel="icon" href="/iamges/favicon.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.card}>
          <h6 className={styles.card__title}>Advice #{advice.id}</h6>
          <q className={styles.card__quote}>{advice.advice}</q>
          <div className={styles.card__divider}></div>
          <div className={styles.button} onClick={handleButtonClick}>
            <img
              className={styles.button__icon}
              src="/images/icon-dice.svg"
              alt="Get random device"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
