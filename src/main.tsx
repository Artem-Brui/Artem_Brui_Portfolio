import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import ContextProvider from "./contexts/Main/ContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
