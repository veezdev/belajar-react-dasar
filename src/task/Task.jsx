import { useState } from "react";
import { useImmer } from "use-immer";

// Direkomendasikan jika kita ingin menggunakan data array sebagai state untuk tidak merubah datanya secara langsung
// ada beberapa peraturan yang dapat kita lihat di powerpoint. Namun untuk mempermudahnya kita bisa memanfaatkan library immer
// berikut merupakan contohnya jika kita ingin menggunakan data complex berupa array sebagai state
function Task() {
  // set task dan setItemsTask sebagai state dengan initial value berupa string kosong untuk handle perubahan di input field
  // gunakan useImmer untuk setItemsTask agar kita tidak perlu lagi untuk memasukkan spread syntax atau jika terjadi nested object yang dalam
  const [task, setTask] = useState("");
  const [itemsTask, setItemsTask] = useImmer([]);

  // create handle for click button, we will use the event.preventDefault() to prevent the default behavior of the button
  // we will use the setItemsTask function to add the task to the itemsTask array, we will use the draft parameter to access the current state of the itemsTask array
  // after that we will set the task state to empty string to clear the input field (for new task)
  const handleClick = (event) => {
    event.preventDefault();
    setItemsTask((draft) => {
      draft.push(task);
    });

    setTask("");
  };

  return (
    <div>
      <h1>Task Form</h1>
      <form>
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleClick}>Add Task</button>
      </form>

      <h2>Task List</h2>
      <ul>
        {itemsTask.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default Task;
