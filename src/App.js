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
