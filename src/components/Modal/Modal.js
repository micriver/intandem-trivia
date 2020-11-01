import React from "react";
import ReactDOM from "react-dom";
import styles from "../QuestionCard/QuestionCard.module.css";

const Modal = ({ isShowing, hide, correct, answer }) => {
  console.log(answer);
  // add logic here to show different modals based on correct and incorrect answers!
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
            <div className={correct ? styles.modal : styles.modal2}>
              {correct ? (
                <div>
                  <p className={styles.modalText}>Correct!</p>
                  <p className={styles.emoji}>🥳</p>
                </div>
              ) : (
                <div>
                  <p className={styles.modalText}>Not quite...</p>
                  <p className={styles.emoji}>🤯</p>
                  {/* <div>{answer}</div> */}
                </div>
              )}
              <div className={styles.modalHeader}>
                <button
                  type='button'
                  className={styles.modalCloseButton}
                  data-dismiss='modal'
                  //   aria-label='Close'
                  onClick={hide}
                >
                  Next question!
                  {/* <span aria-hidden='true'>&times;</span> */}
                </button>
              </div>
            </div>
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
