import React, { useState } from "react";
import styles from "./QuestionCard.module.css";

import { shuffle } from "../../Utils";

export default function QuestionCard({ question, increaseScore }) {
  const [qIndex, setQIndex] = useState(0);
  const [qNum, setQnum] = useState(1);

  const nextQuestion = () => {
    setQIndex(qIndex + 1);
    console.log("the question we are on now = ", qIndex);
  };

  const qNumHandler = () => {
    setQnum(qNum + 1);
  };

  // new Array to copy answers into
  let newArray = [];
  // copy array and contents into new answer array
  newArray = question[qIndex].incorrect.slice();
  // inserting correct answer into new answer array
  newArray.push(question[qIndex].correct);

  const answerHandler = (answer) => {
    const incomingAnswer = Object.values(answer)[0];
    const correctAnswer = Object.values(question[qIndex])[2];
    // console.log(correctAnswer);
    // console.log(incomingAnswer);
    if (incomingAnswer === correctAnswer) {
      console.log("You've selected the correct answer!");
      increaseScore();
      nextQuestion();
    } else {
      console.log("not right!");
      nextQuestion();
    }

    // each time mouse is clicked, question count goes up
    qNumHandler();
    console.log("we are on qnum: ", qNum);
    if (qNum === 10) {
      console.log(
        "round is over! get ready for the second round of questions!"
      );
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
