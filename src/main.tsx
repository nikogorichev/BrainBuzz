import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "app/App";
import "app/styles/index.scss";
import ThemeProvider from "app/providers/ThemeProvider/ui/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
