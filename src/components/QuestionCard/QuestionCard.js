import React, { useState } from "react";
import styles from "./QuestionCard.module.css";

import { shuffle } from "../../Utils";

export default function QuestionCard({ question, increaseScore }) {
  const [qIndex, setQIndex] = useState(0);

  const nextQuestion = () => {
    setQIndex(qIndex + 1);
  };

  let newArray = [];
  newArray = question[qIndex].incorrect.slice();
  // inserting correct answer into incorrect answer array
  newArray.push(question[qIndex].correct);

  const answerHandler = (answer) => {
    const incomingAnswer = Object.values(answer)[0];
    const correctAnswer = Object.values(question[qIndex])[2];
    console.log(correctAnswer);
    console.log(incomingAnswer);
    if (incomingAnswer === correctAnswer) {
      console.log("You've selected the correct answer!");
      increaseScore();
      nextQuestion();
    } else {
      console.log("not right!");
      nextQuestion();
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
        <div className={styles.question}>{question[qIndex].question}</div>
        <div className={styles.answers}>
          <div>{listItems}</div>
        </div>
      </div>
    </div>
  );
}
