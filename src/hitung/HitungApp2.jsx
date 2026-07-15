import { useState } from "react";
import Hitung2 from "./Hitung2";

// Jika kita ingin mempertahankan statenya
// kita bisa membuat component berada di tempat yang sama satu dengan lainnya
// karena nanti react akan menganggap componentnya ada disitu dan ga hilang kita cuman merubah beberapa propsnya saja, jadi state akan tetap ada
function HitungApp2() {
  // state for showing or hiding the counter component
  const [show2, setShow2] = useState(true);

  const handleShowCounter2 = (e) => {
    setShow2(e.target.checked);
  };

  return (
    <div>
      {/* if input check has been checked it will display Component 1, otherwise it will display Component 2 */}
      {/* whenever we use this it won't reset the state */}
      {show2 ? <Hitung2 name="Component 1" /> : <Hitung2 name="Component 2" />}
      <br />
      <input
        type="checkbox"
        onChange={handleShowCounter2}
        value="counter"
        checked={show2}
      />{" "}
      Change counter name (checked will display Component 1, unchecked will
      display Component 2)
    </div>
  );
}

export default HitungApp2;
