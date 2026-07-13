import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import AlertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";

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
    </Container>
  </StrictMode>,
);
