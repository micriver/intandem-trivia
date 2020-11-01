import React, { useState } from "react";
import styles from "./QuestionCard.module.css";

import { shuffle } from "../../Utils";
import Modal from "../Modal/Modal";
import useModal from "../Modal/useModal";

export default function QuestionCard({ question, increaseScore }) {
  const [qIndex, setQIndex] = useState(0);
  const [qNum, setQnum] = useState(1);

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
      setAnswer();
      // toggle modal function goes here
      isCorrect(true);
      toggle();
      nextQuestion();
    } else {
      console.log("not right!");
      isCorrect(false);
      toggle();
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
      // onClick={(() => answerHandler({ answers }), toggle)}
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
          // answer={toString(Object.values(question[qIndex])[2])}
          answer={Object.values(question[qIndex])[2]}
          isShowing={isShowing}
          hide={toggle}
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
