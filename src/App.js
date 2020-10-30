import React from "react";
import QuestionCard from "./components/QuestionCard/QuestionCard";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>inTandem Trivia!</h1>
      <QuestionCard />
    </div>
  );
}

export default App;

/*

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
