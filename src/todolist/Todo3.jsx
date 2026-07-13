// ternary operator
// use colon (:) to separate the true and false values, and ? after the condition to check
function Todo3({ text, isCompleted, isDeleted = false }) {
  // if isDeleted is true from parent component, the component will be removed from the DOM
  // if isDeleted is false, the component will be rendered with the text and a strikethrough if isCompleted is true using ternary operator
  if (isDeleted) {
    return null;
  } else {
    // ternary operator is a shorthand for if else statement, it can be used to return a value based on a condition using ? and :
    return <li>{isCompleted ? <del>{text}</del> : text}</li>;
  }
}

export default Todo3;
