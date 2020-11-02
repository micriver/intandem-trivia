import React, { useState } from "react";
// import React from "react";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import trivia from "./assets/JSON/Apprentice_TandemFor400_Data.json";

import styles from "./App.module.css";
import ScoreCard from "./components/Score/ScoreCard";

import { shuffle } from "./Utils";

function App() {
  const [stateTrivia, setTrivia] = useState(trivia);
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
    console.log(gameStarted);
    console.log("The game has started", gameStarted);
  };

  const shuffleQuestions = () => {
    shuffle(stateTrivia);
    setTrivia(stateTrivia);
    console.log(stateTrivia);
  };

  // modify rounds to show different questions
  // const [round, setRound] = useState(1);
  const [score, setScore] = useState(0);

  const increaseScore = () => {
    setScore(score + 1);
  };

  if (!gameStarted) {
    console.log("we're about to shuffle");
    shuffleQuestions();
    startGame();
  } else {
    console.log("This happens when gameStarted is: ", gameStarted);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trivia!</h1>
      <QuestionCard
        increaseScore={increaseScore}
        question={Object.values(stateTrivia)}
      />
      <ScoreCard classname={styles.scoreCard} score={score} />
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
[✓] All questions are multiple-choice questions
[✓] Your score does not need to update in real time
[ ] Results can update on form submit, button click, or any interaction you choose
[✓] We will provide you with the trivia data such as the questions, correct and incorrect answers via a JSON file.

Acceptance Criteria
• • • • • •
[✓] A user can view questions.
[✓] Questions with their multiple choice options must be displayed one at a time. Questions should not repeat in a round.
[✓] A user can select only 1 answer out of the 4 possible answers.
[✓] The correct answer must be revealed after a user has submitted their answer
[ ] A user can see the score they received at the end of the round
[ ] Your submission must include instructions for how to run your code. You must also list any system dependencies (e.g. Ruby 2.3, Erlang runtime, JDK8, etc). Your README is a great place to put this information
[ ] Your README must include any information about how to run the code, any known issues or complexity we should look out for, and any additional features you would like to have added to make your trivia app even more awesome

ctrl+k, shift+o,k for checkmark

*/
