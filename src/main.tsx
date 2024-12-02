import { createRoot } from "react-dom/client";
import ContextProvider from "@contexts/Main/ContextProvider";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
