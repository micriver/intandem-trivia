// A Hook in React is a function that shares common logic between multiple components.
// Always prefix Hooks with use, followed by the name of the Hook.

import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  //   Return the value of isShowing and the toggle function from the Hook, so the component has access to them.
  return {
    isShowing,
    toggle,
  };
};

export default useModal;
