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
  // const listItems = incorrect.map((incAnswers) => (
  //   <li onClick={() => answerHandler({ incAnswers })} className={styles.items}>
  //     {incAnswers}
  //   </li>
  // ));
  console.log(questionObj);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div onClick={answerHandler}>{questionObj[0]}</div>
        {/* <div className={styles.question}>{question}</div>
        <div className={styles.answers}>
          <div>{listItems}</div>
          <li
            onClick={() => answerHandler({ correct })}
            className={styles.items}
          >
            {correct}
          </li>
        </div> */}
      </div>
    </div>
  );
}
