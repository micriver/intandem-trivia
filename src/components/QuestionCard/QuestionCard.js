import React from "react";
import styles from "./QuestionCard.module.css";

export default function QuestionCard({
  questionObj,
  // question,
  // incorrect,
  // correct,
  answerHandler,
}) {
  // mapping incorrect object property to a JSX variable
  const listItems = questionObj[1].map((incAnswers) => (
    <li onClick={() => answerHandler({ incAnswers })} className={styles.items}>
      {incAnswers}
    </li>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.question} onClick={answerHandler}>
          {questionObj[0]}
        </div>
        <div className={styles.answers}>
          <div>{listItems}</div>
          <li
            // onClick={() => answerHandler(questionObj[2])}
            // testing question changing
            onClick={answerHandler()}
            className={styles.items}
          >
            {questionObj[2]}
          </li>
        </div>
      </div>
    </div>
  );
}
