import React, { useState } from "react";
// import React from "react";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import trivia from "./assets/JSON/Apprentice_TandemFor400_Data.json";

import styles from "./App.module.css";

function App() {
  // modify rounds to show different questions
  // const [round, setRound] = useState(1);
  const [questionObj, setQuestion] = useState();

  // feed all of trivia JSON data at top level since this is array of objects
  function randomNoRepeats(array) {
    var copy = array.slice(0); // create a copy of the incoming array from the first index
    return function () {
      if (copy.length < 1) {
        // length check
        copy = array.slice(0);
      }
      var index = Math.floor(Math.random() * copy.length); // get a random item in the array within it's length
      var item = copy[index]; // assign object in the array to variable
      // questionObj = copy[index]; // assign object in the array to variable
      copy.splice(index, 1); // remove the item found at the index in the copied array
      return item; // return that item
    };
  }

  // question changes everytime we call setQuestion
  // let setQuestion = randomNoRepeats(trivia);
  const chooseQuestion = () => {
    setQuestion(randomNoRepeats(trivia));
  };
  console.log(chooseQuestion());

  const randomNum = Math.floor(Math.random() * trivia.length);

  const answerHandler = (answer) => {
    const incomingAnswer = Object.values(answer)[0];
    const correctAnswer = Object.values(trivia[randomNum])[2];
    if (incomingAnswer === correctAnswer) {
      console.log("You've selected the correct answer!");
    } else {
      console.log("not right!");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trivia!</h1>
      {/* <QuestionCard
        answerHandler={() => setQuestion()}
        // answerHandler={answerHandler}
        questionObj={questionObj}
        // questionObj={Object.values(setQuestion())}
        // correct={Object.values(chooser())[2]}
        // // correct={Object.values(trivia[randomNum])[2]}
        // incorrect={Object.values(chooser())[1]}
        // question={Object.values(chooser())[0]}
      /> */}
      {questionObj}
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
