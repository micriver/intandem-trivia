import React from "react";
import ReactDOM from "react-dom";
import styles from "../QuestionCard/QuestionCard.module.css";

const Modal = ({
  isShowing,
  hide,
  correct,
  answer,
  nextQuestion,
  increaseScore,
  questionNum,
}) => {
  var modal;
  if (correct && questionNum !== 10) {
    // add check to make sure its not the end of the round or the last question
    modal = ( // if correct, display this modal
      <>
        <div className={styles.modal}>
          <p className={styles.modalText}>Correct</p>
          <p className={styles.emoji}>🥳</p>
          <div className={styles.modalHeader}>
            <button
              type='button'
              className={styles.modalCloseButton}
              data-dismiss='modal'
              onClick={() => {
                hide();
                nextQuestion();
                increaseScore();
              }}
            >
              Next question!
            </button>
          </div>
        </div>
      </>
    );
  } else if (!correct && questionNum !== 10) {
    // if incorrect, display this modal
    modal = (
      <div className={styles.modal2}>
        <p className={styles.modalText}>Not quite...</p>
        <p className={styles.cAnswer}>The correct answer is: {answer}</p>
        <p className={styles.emoji}>🤯</p>
        <div className={styles.modalHeader}>
          <button
            type='button'
            className={styles.modalCloseButton}
            data-dismiss='modal'
            onClick={() => {
              hide();
              nextQuestion();
            }}
          >
            Next question!
          </button>
        </div>
      </div>
    );
  } else if (questionNum === 10) {
    // display the modal saying thats the end of round 1!
    if (correct) {
      modal = ( // if correct, display this modal
        <>
          <div className={styles.modal}>
            <p className={styles.modalText}>Correct!</p>
            <p className={styles.cAnswer}>That's the end of round 1️⃣</p>
            {/* <p className={styles.modalText}>Here are you results: {score}</p> */}
            <p className={styles.emoji}>🥳</p>
            <div className={styles.modalHeader}>
              <button
                type='button'
                className={styles.modalCloseButton}
                data-dismiss='modal'
                onClick={() => {
                  hide();
                  nextQuestion();
                  increaseScore();
                }}
              >
                Start Round 2️⃣
              </button>
            </div>
          </div>
        </>
      );
    } else {
      modal = ( // if incorrect and end of the first round, display this modal
        <>
          <div className={styles.modal2}>
            <p className={styles.modalText}>Not quite...</p>
            <p className={styles.cAnswerRound1}>
              The correct answer is: {answer}
            </p>
            <p className={styles.cAnswerRound1}>That's the end of round 1️⃣!</p>
            <p className={styles.emoji}>🤯</p>
            <div className={styles.modalHeader}>
              <button
                type='button'
                className={styles.modalCloseButton}
                data-dismiss='modal'
                onClick={() => {
                  hide();
                  nextQuestion();
                }}
              >
                Start Round 2️⃣
              </button>
            </div>
          </div>
        </>
      );
    }
  } else if (questionNum === 20) {
    // display the modal displaying results and have a restart button to reset everything!
    if (correct) {
      modal = ( // if correct, display this modal
        <>
          <div className={styles.modal}>
            <p className={styles.modalText}>Correct!</p>
            <p className={styles.cAnswer}>That's the end of round 2️⃣</p>
            <p className={styles.modalText}>Here are you results: 10/10</p>
            <p className={styles.emoji}>🥳</p>
            <div className={styles.modalHeader}>
              <button
                type='button'
                className={styles.modalCloseButton}
                data-dismiss='modal'
                onClick={() => {
                  hide();
                  nextQuestion();
                  increaseScore();
                }}
              >
                Let's play again!
              </button>
            </div>
          </div>
        </>
      );
    }
  }
  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className={styles.modalOverlay} />
          <div
            className={styles.modalWrapper}
            aria-modal
            aria-hidden
            tabIndex={-1}
            role='dialog'
          >
            {modal}
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default Modal;

/*
Portals allow React components to render in another part of the DOM that is outside of their parent component.

Therefore, we can use a Portal to mount our Modal component to the end of the document.body element, rather than as a child of another component.
*/
