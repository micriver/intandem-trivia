import React from "react";
import styles from "./QuestionCard.module.css";
import trivia from "../../assets/JSON/Apprentice_TandemFor400_Data.json";

export default function QuestionCard() {
  console.log(trivia[0]);

  // mapping incorrect object property to a JSX variable
  const listItems = Object.values(trivia[0].incorrect).map((incAnswers) => (
    <li>{incAnswers}</li>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.question}>{trivia[0].question}</div>
        <div className={styles.answers}>
          <div className='items'>{listItems}</div>
          <li>{trivia[0].correct}</li>
        </div>
      </div>
    </div>
  );
}
