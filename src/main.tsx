import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "app/App";
import "app/styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import { ScreenSizeProvider } from "app/providers/ScreenSizeProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ScreenSizeProvider>
          <App />
        </ScreenSizeProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
