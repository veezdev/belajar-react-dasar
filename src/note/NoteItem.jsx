import { useState } from "react";

function NoteItem({ note, onChange, onDelete }) {
  const [isEditingNote, setIsEditingNote] = useState(false);

  let componentNote;

  const handleChangeText = (event) => {
    onChange({ ...note, content: event.target.value });
  };

  const handleChangeDone = (event) => {
    const newNote = { ...note, done: event.target.checked };
    onChange(newNote);
  };

  if (isEditingNote) {
    componentNote = (
      <>
        <input onChange={handleChangeText} value={note.content} />
        <button onClick={() => setIsEditingNote(false)}>Save</button>
      </>
    );
  } else {
    componentNote = (
      <>
        {note.content}
        <button onClick={() => setIsEditingNote(true)}>Edit</button>
      </>
    );
  }

  return (
    <label>
      <input type="checkbox" checked={note.done} onChange={handleChangeDone} />
      {componentNote}
      <button onClick={() => onDelete(note)}>Delete</button>
    </label>
  );
}

export default NoteItem;
