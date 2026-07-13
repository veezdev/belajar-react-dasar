import { useState } from "react";

function TugasForm({ onSubmit }) {
  const [tugas, setTugas] = useState("");

  // create handle for click button, we will use the event.preventDefault() to prevent the default behavior of the button
  // we will use the onSubmit function to add the task to the parent component, we will pass the tugas state as parameter
  // after that we will set the tugas state to empty string to clear the input field (for new task)
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(tugas);
    setTugas("");
  };

  return (
    <div>
      <h1>Form Tugas</h1>
      <form>
        <input
          type="text"
          name="tugas"
          id="tugas"
          placeholder="Enter task"
          value={tugas}
          onChange={(e) => setTugas(e.target.value)}
        />
        <button onClick={handleSubmit}>Add Task</button>
      </form>
    </div>
  );
}

export default TugasForm;
