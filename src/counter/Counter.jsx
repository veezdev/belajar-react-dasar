import { useState } from "react";

const Counter = () => {
  // useState is a hook that allows us to add state to functional components in React.
  // It will return an array with two elements, the first element is the current state value and the second element is a function that allows us to update the state value.
  // useState can have an initial value as an argument/parameter, and the initial value can be a number, string, boolean, array, object, or even a function that returns a value.
  const [count, setCount] = useState(0); // initial value is 0, and the current state value is count, and the function to update the state value is setCount

  // handleClickIncrement is a function that will be called when the button is clicked, and it will increment the count state value by 1
  const handleClickIncrement = () => {
    let result = count + 1;

    // setCount is a function built-in react that will update the state value and re-render the component with the new state value,
    // and it will also trigger a re-render and it will also trigger a re-render of the parent component and all of its children, and it will also trigger a re-render of the entire application
    setCount(result);
  };

  return (
    <div>
      <button onClick={handleClickIncrement}>Increment</button>

      <h1
        style={{
          fontFamily: "Arial, sans-serif",
        }}
      >
        Counter : {count}
      </h1>
    </div>
  );
};

export default Counter;
