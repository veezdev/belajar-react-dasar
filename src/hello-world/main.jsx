import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import AlertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";
import ButtonSaya from "../button/ButtonSaya";
import Toolbar from "../button/Toolbar";

// react component for render in root file
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Notice between Container components there is HelloWorld component for rendering all elements in the container section */}
    <Container>
      <HelloWorld />

      {/* Alert Button component from button/AlertButton.jsx for reading props from parent -> child */}
      <AlertButton text="Click Me" message="Hello, World!" />

      {/* Reading event handler from props children */}
      {/* MyButton component from button/MyButton.jsx for reading event handler from props children */}
      {/* because the name in props using onSmash so we can pass a function with name onSmash and we can put the logic immediately or in body script function */}
      <MyButton text={"Klik saya"} onSmash={() => alert("Button clicked!")} />

      {/* Event Object */}
      {/* Button component from button/ButtonSaya.jsx for reading event object from props children */}
      <ButtonSaya text="Click Me" message="Hello, World!" />

      {/* Event Propagation */}
      {/* Event propagation is the mechanism by which events are handled in the DOM for stopping the event from bubbling up to parent elements */}
      {/* like if we have a button inside a div and we want to handle the click event for the button without triggering the click event for the div */}
      <Toolbar
        onClick={(e) => {
          e.stopPropagation();
          console.log("Clicked");
        }}
      />
    </Container>
  </StrictMode>,
);
