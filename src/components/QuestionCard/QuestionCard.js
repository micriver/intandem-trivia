import React from "react";
import styles from "./QuestionCard.module.css";

import { shuffle } from "./Utils";

export default function QuestionCard({ question }) {
  let newArray = [];
  newArray = question[0].incorrect.slice();
  // inserting correct answer into incorrect answer array
  newArray.push(question[0].correct);

  const answerHandler = (answer) => {
    const incomingAnswer = Object.values(answer)[0];
    const correctAnswer = Object.values(question[0])[2];
    if (incomingAnswer === correctAnswer) {
      console.log("You've selected the correct answer!");
    } else {
      console.log("not right!");
    }
  };

  const listItems = shuffle(newArray).map((answers, index) => (
    <li
      key={index}
      onClick={() => answerHandler({ answers })}
      className={styles.items}
    >
      {answers}
    </li>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.question}>{question[0].question}</div>
        <div className={styles.answers}>
          <div>{listItems}</div>
        </div>
      </div>
    </div>
  );
}
