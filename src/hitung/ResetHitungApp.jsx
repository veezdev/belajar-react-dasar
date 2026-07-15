import { useState } from "react";
import ResetHitung from "./ResetHitung";

// rekomendasi mereset state adalah dengan membedakan key pada setiap component
// hal ini bertujuan untuk memudahkan kita daripada merubah posisi component, menghilangkan component, dll
function ResetHitungApp() {
  // state for showing or hiding the counter component
  // get the state of the checkbox input and with method handleShowCounter3
  // to change the state of the current component "true" to "false" and vice versa
  const [show3, setShow3] = useState(true);

  const handleShowCounter3 = (e) => {
    setShow3(e.target.checked);
  };
  return (
    <div>
      {show3 ? (
        <ResetHitung key="reset1" name="Component 1" />
      ) : (
        <ResetHitung key="reset2" name="Component 2" />
      )}
      {/* input checked look at the state of show3 and with method handleShowCounter3 */}
      <input
        type="checkbox"
        onChange={handleShowCounter3}
        value={show3}
        checked={show3}
      />
      Reset Counter Component Name
    </div>
  );
}

export default ResetHitungApp;
