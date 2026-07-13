function Toolbar({ onClick }) {
  return (
    // This is a div with an onClick event handler that will be triggered when the div is clicked.
    // The onClick event handler will stop the event from bubbling up to the parent elements and will log "Clicked" to the console.
    // but if we didn't use e.stopPropagation() in the onClick event handler,
    // the event will bubble up to the parent elements and will trigger the onClick event handler for the parent elements as well.
    <div onClick={onClick}>
      <button onClick={onClick}>First</button>
      <button onClick={onClick}>Second</button>
    </div>
  );
}

export default Toolbar;
