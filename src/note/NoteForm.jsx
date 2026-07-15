import { useState } from "react";

/**
 * NoteForm component for adding new notes
 * @param {Function} param.onChangeForm - The function to call when the form is submitted
 * @returns {JSX.Element} The NoteForm component
 */
function NoteForm({ onChangeForm }) {
  // State to hold the current note being added
  const [addNote, setAddNote] = useState("");

  // function for handling changes in the input field
  // when the user types in the input field, this function updates the state with the new value
  const handleChangeNote = (event) => {
    setAddNote(event.target.value);
  };

  // function for handling the click event of the "Add Note" button
  // when the button is clicked, this function clears the input field and calls the onChangeForm function with the current note
  // function onChangeForm is passed as a prop from the parent component (NoteApp) and is used to handle the submission of the new note in other component
  const handleClick = () => {
    setAddNote("");
    onChangeForm(addNote);
  };

  // render the NoteForm component with an input field and a button
  // the input field is controlled by the addNote state and updates the state on change
  // the button calls the handleClick function when clicked
  return (
    <>
      <input
        type="text"
        name="note"
        id="note"
        placeholder="Enter your note here..."
        onChange={handleChangeNote}
        value={addNote}
      />
      <button onClick={handleClick}>Add Note</button>
    </>
  );
}

export default NoteForm;
