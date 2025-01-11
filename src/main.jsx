import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

import "./i18n";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AuthContextProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <App />
          </Suspense>
        </AuthContextProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
