// import { useReducer } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { useImmerReducer } from "use-immer";

// initial data for notesReducer (same like NoteApp component without Reducer)
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
 * notesReducer function is a reducer function that takes the current state of notes and an action, and returns a new state based on the action type.
 * @param {Array} notes - The current state of notes.
 * @param {Object} action - An action object that contains a type and any additional data needed for the action.
 * @returns {Array} The new state of notes after applying the action.
 */
/* eslint-disable */
function notesReducer(notes, action) {
  /**
   * The notesReducer function handles three types of actions: ADD_NOTE, CHANGE_NOTE, and DELETE_NOTE.
   * - ADD_NOTE: Adds a new note to the state with a unique id, the provided content, and a done status of false.
   * - CHANGE_NOTE: Updates an existing note's content and done status based on the provided id.
   * - DELETE_NOTE: Removes a note from the state based on the provided id.
   * If the action type does not match any of these, it returns the current state unchanged.
   */
  switch (action.type) {
    case "ADD_NOTE":
      return [
        ...notes,
        {
          id: id++,
          content: action.content,
          done: false,
        },
      ];
    case "CHANGE_NOTE":
      return notes.map((note) =>
        note.id === action.id
          ? { ...note, content: action.content, done: action.done }
          : note,
      );
    case "DELETE_NOTE":
      return notes.filter((note) => note.id !== action.id);
    default:
      return notes;
  }
}
/* eslint-enable */

/**
 * notesReducerImmer function is a reducer function that uses Immer to handle state updates in an immutable way.
 * It takes the current state of notes (as a draft) and an action, and modifies the draft based on the action type.
 * @param {Array} draft - The current state of notes as a draft (mutable).
 * @param {Object} action - An action object that contains a type and any additional data needed for the action.
 * @returns {void} The function modifies the draft in place based on the action type.
 */
function notesReducerImmer(draft, action) {
  // The notesReducerImmer function handles three types of actions: ADD_NOTE, CHANGE_NOTE, and DELETE_NOTE.
  // - ADD_NOTE: Adds a new note to the draft with a unique id, the provided content, and a done status of false.
  // - CHANGE_NOTE: Updates an existing note's content and done status in the draft based on the provided id.
  // - DELETE_NOTE: Removes a note from the draft based on the provided id.
  // If the action type does not match any of these, it does nothing and the draft remains unchanged.
  if (action.type === "ADD_NOTE") {
    draft.push({
      id: id++,
      content: action.content,
      done: false,
    });
  } else if (action.type === "CHANGE_NOTE") {
    const noteIndex = draft.findIndex((note) => note.id === action.id);
    draft[noteIndex].content = action.content;
    draft[noteIndex].done = action.done;
  } else if (action.type === "DELETE_NOTE") {
    const noteIndex = draft.findIndex((note) => note.id === action.id);
    draft.splice(noteIndex, 1);
  }
}

/**
 * NoteAppsReducer component is the main component for the note-taking application that uses the useReducer hook to manage the state of notes.
 * It handles adding, changing, and deleting notes by dispatching actions to the notesReducer function (logic of reducer).
 * @returns {JSX.Element} The NoteAppsReducer component
 */
function NoteAppsReducer() {
  // useReducer hook is used to manage the state of notes with the notesReducer function and initialNotes as the initial state
  const [notes, dispatch] = useImmerReducer(notesReducerImmer, initialNotes);

  // function for handling the addition of a new note
  // when a new note is added, this function dispatches an ADD_NOTE action with the content of the new note
  function handleAddNote(content) {
    dispatch({
      type: "ADD_NOTE",
      content: content,
    });
  }

  // function for handling changes to an existing note
  // when a note is changed (either its content or done status), this function dispatches a CHANGE_NOTE action with the id, content, and done status of the new note
  function handleChangeNote(newNote) {
    dispatch({
      type: "CHANGE_NOTE",
      id: newNote.id,
      content: newNote.content,
      done: newNote.done,
    });
  }

  // function for handling the deletion of a note
  // when a note is deleted, this function dispatches a DELETE_NOTE action with the id of the note to be deleted
  function handleDeleteNote(noteToDelete) {
    dispatch({
      type: "DELETE_NOTE",
      id: noteToDelete.id,
    });
  }

  return (
    <>
      <h1>Note App With Reducer</h1>
      <NoteForm onChangeForm={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      />
    </>
  );
}

export default NoteAppsReducer;
