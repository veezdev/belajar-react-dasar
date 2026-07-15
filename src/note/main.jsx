import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NoteApp from "./NoteApp";
import NoteAppsReducer from "./NoteAppsReducer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NoteApp />
    <hr />
    <NoteAppsReducer />
  </StrictMode>,
);
