import Todo from "./Todo";
import Todo2 from "./Todo2";
import Todo3 from "./Todo3";
import Todo4 from "./Todo4";

// Conditional Rendering
// if we can render a component based on a condition, we can use conditional renderin in react
// for more detail you can check the docs or read the comment each child component
const TodoList = () => {
  return (
    <div>
      <h1>Todolist</h1>
      <ul>
        {/* Regular Conditional Rendering */}
        <Todo text="Learn React" isCompleted={true} />

        {/* Conditional Rendering with null component (null will remove the component) */}
        <Todo2 text="Build a React App" isCompleted={false} isDeleted={true} />

        {/* Conditional Rendering with ternary operator */}
        <Todo3 text="Deploy the App" isCompleted={true} />

        {/* Conditional Rendering with logical AND operator */}
        <Todo4 text="Get Feedback" isCompleted={true} />
      </ul>
    </div>
  );
};

export default TodoList;
