import React, { useState } from "react";
// import React from "react";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import trivia from "./assets/JSON/Apprentice_TandemFor400_Data.json";

import styles from "./App.module.css";

function App() {
  // modify rounds to show different questions
  // const [round, setRound] = useState(1);

  function shuffle(array) {
    let ctr = array.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = array[ctr];
      array[ctr] = array[index];
      array[index] = temp;
    }
    return array;
  }
  shuffle(trivia);
  // console.log(shuffle(trivia));

  // const randomNum = Math.floor(Math.random() * trivia.length);

  // const answerHandler = (answer) => {
  //   const incomingAnswer = Object.values(answer)[0];
  //   console.log(incomingAnswer);
  //   const correctAnswer = Object.values(trivia[0])[2];
  //   console.log(correctAnswer);
  //   // if (incomingAnswer === correctAnswer) {
  //   //   console.log("You've selected the correct answer!");
  //   // } else {
  //   //   console.log("not right!");
  //   // }
  // };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trivia!</h1>
      <QuestionCard
        // answerHandler={answerHandler}
        // correct={Object.values(trivia[randomNum])[2]}
        // incorrect={Object.values(chooser())[1]}
        // question={Object.values(chooser())[0]}
        question={Object.values(trivia)}
      />
    </div>
  );
}

export default App;

/*

The JSON data is an array of objects. Each object has a question and answers as properties of that object

You must randomly select a question from the JSON array on startup.

Assumptions
• • • • •

[ ] A round of trivia has 10 Questions
[ ] All questions are multiple-choice questions
[ ] Your score does not need to update in real time
[ ] Results can update on form submit, button click, or any interaction you choose
[✓] We will provide you with the trivia data such as the questions, correct and incorrect answers via a JSON file.

Acceptance Criteria
• • • • • •
[✓] A user can view questions.
[ ] Questions with their multiple choice options must be displayed one at a time. Questions should not repeat in a round.
[ ] A user can select only 1 answer out of the 4 possible answers.
[ ] The correct answer must be revealed after a user has submitted their answer
[ ] A user can see the score they received at the end of the round

ctrl+k, shift+o,k for checkmark

*/
