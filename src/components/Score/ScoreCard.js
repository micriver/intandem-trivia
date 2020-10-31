import React from "react";
import styles from "./ScoreCard.module.css";

export default function ScoreCard({ score }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.number}>{score}</div>
      </div>
    </div>
  );
}
