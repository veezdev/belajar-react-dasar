import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HitungApp from "./HitungApp";
import HitungApp2 from "./HitungApp2";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HitungApp />
    <hr />
    <HitungApp2 />
  </StrictMode>,
);
