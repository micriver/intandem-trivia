import React from "react";
import styles from "./QuestionCard.module.css";
import trivia from "../../assets/JSON/Apprentice_TandemFor400_Data.json";

export default function QuestionCard({ question, incorrect, correct }) {
  const answerHandler = () => {
    console.log("you're clicking the button!");
  };
  // mapping incorrect object property to a JSX variable
  const listItems = incorrect.map((incAnswers) => (
    <li className={styles.items}>{incAnswers}</li>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.question}>{question}</div>
        <div className={styles.answers}>
          <div>{listItems}</div>
          <li onClick={answerHandler} className={styles.items}>
            {correct}
          </li>
        </div>
      </div>
    </div>
  );
}
