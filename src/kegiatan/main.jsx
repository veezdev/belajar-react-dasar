import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ListKegiatan from "./ListKegiatan";
import ListKegiatan2 from "./ListKegiatan2";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ListKegiatan />
    <hr />
    <ListKegiatan2 />
  </StrictMode>,
);
