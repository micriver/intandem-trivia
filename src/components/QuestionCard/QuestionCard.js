import React from "react";
import styles from "./QuestionCard.module.css";
import trivia from "../../assets/JSON/Apprentice_TandemFor400_Data.json";

export default function QuestionCard() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.question}>{trivia[0].question}</div>
        <div className={styles.answers}>
          <p>{trivia[0].incorrect}</p>
          <p>{trivia[0].correct}</p>
        </div>
      </div>
    </div>
  );
}
