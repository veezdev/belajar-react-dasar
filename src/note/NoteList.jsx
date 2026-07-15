import NoteItem from "./NoteItem";

/**
 * NoteList component is responsible for rendering a list of notes. It takes in an array of notes and two callback functions for handling changes and deletions of individual notes.
 * @param {Array} param0.notes - An array of note objects to be displayed in the list.
 * @param {Function} param0.onChange - A callback function to handle changes to a note's content or done status.
 * @param {Function} param0.onDelete - A callback function to handle the deletion of a note.
 * @returns {JSX.Element} The NoteList component, which renders a list of NoteItem components.
 */
function NoteList({ notes, onChange, onDelete }) {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <NoteItem note={note} onChange={onChange} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
