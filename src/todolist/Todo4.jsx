// AND && logical operator
// if the first value is true, the second value will be returned
// if not the first value will be returned
function Todo4({ text, isDeleted = false, isCompleted }) {
  // if isDeleted is true from parent component, the component will be removed from the DOM
  // if isDeleted is false, the component will be rendered with the text and a checkmark if isCompleted is true
  if (isDeleted) {
    return null;
  } else {
    return (
      <li>
        {text} {isCompleted && "✅"}
      </li>
    );
  }
}

export default Todo4;
