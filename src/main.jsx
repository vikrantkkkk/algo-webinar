import React, { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ButtonProvider } from "./hooks/ButtonContext.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ButtonProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ButtonProvider>
  </StrictMode>
);
