// For regular conditioanl rendering we can create a component that will render with condition logic
// using if else statement and the each of block if or else statement we can return a component that will be rendered in the parent component
function Todo({ text, isCompleted }) {
  // if isCompleted is true from parent component, the component will be rendered with the text and a strikethrough
  // if isCompleted is false, the component will be rendered with the text without a strikethrough
  if (isCompleted) {
    return (
      <li>
        <del>{text}</del>
      </li>
    );
  } else {
    return <li>{text}</li>;
  }
}

export default Todo;
