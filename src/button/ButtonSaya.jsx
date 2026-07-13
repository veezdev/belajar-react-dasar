function ButtonSaya({ text, message }) {
  // event object is an object that contains information about the event that occurred.
  // It is passed as an argument to the event handler function.
  // The event object has many properties and methods that can be used to get information about the event, such as the target element, the type of event, and the time the event occurred.
  // very helpful when we wanna take information like input by user using keyboard etc..
  function handleClick(event) {
    console.log(event.target.innerText);
    console.log(message);
  }

  return <button onClick={handleClick}>{text}</button>;
}

export default ButtonSaya;
