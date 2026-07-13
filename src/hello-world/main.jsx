import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";

// react component for render in root file
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Notice between Container components there is HelloWorld component for rendering all elements in the container section */}
    <Container>
      <HelloWorld />
    </Container>
  </StrictMode>,
);
