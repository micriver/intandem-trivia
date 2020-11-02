import React, { useState } from "react";
import styles from "./QuestionCard.module.css";

import { shuffle } from "../../Utils";
import Modal from "../Modal/Modal";
import useModal from "../Modal/useModal";

export default function QuestionCard({
  question,
  increaseScore,
  score,
  resetGame,
}) {
  const [qIndex, setQIndex] = useState(0);

  // toggle modal
  const { isShowing, toggle } = useModal();
  // is the answer correct
  const [correct, isCorrect] = useState(false);

  const setAnswer = () => {
    isCorrect(true);
  };

  const nextQuestion = () => {
    setQIndex(qIndex + 1);
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
      setAnswer();
      // toggle modal function goes here
      isCorrect(true);
      toggle();
    } else {
      console.log("not right!");
      isCorrect(false);
      toggle();
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
    <>
      <div className={styles.container}>
        <Modal
          correct={correct}
          answer={Object.values(question[qIndex])[2]}
          isShowing={isShowing}
          hide={toggle}
          nextQuestion={nextQuestion}
          increaseScore={increaseScore}
          questionNum={qIndex + 1}
          score={score}
          resetGame={resetGame}
          resetQ={setQIndex}
        />
        <div className={styles.card}>
          <div className={styles.question}>{question[qIndex].question}</div>
          <div className={styles.answers}>
            <div>{listItems}</div>
          </div>
        </div>
      </div>
    </>
  );
}
