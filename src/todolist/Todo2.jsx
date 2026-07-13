// Same like regular conditional rendering. But if we add a null component it will remove the component from the DOM
function Todo2({ text, isCompleted, isDeleted = false }) {
  // if isDeleted is true from parent component, the component will be removed from the DOM
  // if isDeleted is false, the component will be rendered with the text and a strikethrough if isCompleted is true
  if (isDeleted) {
    return null;
  } else if (isCompleted) {
    return (
      <li>
        <del>{text}</del>
      </li>
    );
  } else {
    return <li>{text}</li>;
  }
}

export default Todo2;
