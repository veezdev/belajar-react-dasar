import { useImmer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

// data initial and structure for the NoteApp component
// there is an array of notes, each note has an id, content, and done status (true or false by default false)
let id = 0;
const initialNotes = [
  {
    id: id++,
    content: "Learn HTML",
    done: false,
  },
  {
    id: id++,
    content: "Learn CSS",
    done: false,
  },
  {
    id: id++,
    content: "Learn JavaScript",
    done: false,
  },
];

/**
 * NoteApp component is the main component for the note-taking application.
 * It manages the state of the notes and handles adding, changing, and deleting notes.
 * @returns {JSX.Element} The NoteApp component
 */
function NoteApp() {
  const [notes, setNotes] = useImmer(initialNotes);

  // function for handling the addition of a new note
  // when a new note is added, this function updates the notes state with the new note
  // the new note is created with a unique id, the content passed to the function, and a done status of false
  function handleAddNote(content) {
    setNotes((draft) => {
      draft.push({
        id: id++,
        content,
        done: false,
      });
    });
  }

  // function for handling changes to an existing note
  // when a note is changed (either its content or done status), this function updates the notes state with the new note
  // it finds the index of the note to be changed in the notes array and replaces it with the new note
  function handleChangeNote(newNote) {
    setNotes((draft) => {
      const note = draft.findIndex((note) => note.id === newNote.id);
      draft[note] = newNote;
    });
  }

  // function for handling the deletion of a note
  // when a note is deleted, this function updates the notes state by removing the note from the array
  // it finds the index of the note to be deleted in the notes array and removes it using splice method
  function handleDeleteNote(noteToDelete) {
    setNotes((draft) => {
      const note = draft.findIndex((note) => note.id === noteToDelete.id);
      draft.splice(note, 1);
    });
  }

  return (
    <>
      <h1>Note App</h1>
      <NoteForm onChangeForm={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      />
    </>
  );
}

export default NoteApp;
