import { useState } from "react";
import Hitung from "./Hitung";

// As we know that React will save state in React not in component check other file tutorial
// but if we want to reset the state we can choose to undisplay the component and display it again, so the state will be reset to initial state
function HitungApp() {
  // show state for showing or hiding the counter component
  const [show, setShow] = useState(true);

  const handleShowCounter = (e) => {
    setShow(e.target.checked);
  };

  return (
    <div>
      <Hitung />
      {/* Display state when checkbox is checked, and undisplay when unchecked */}
      {show && <Hitung />}
      <br />
      <input type="checkbox" onChange={handleShowCounter} value={show} /> Show
      Counter
    </div>
  );
}

export default HitungApp;
