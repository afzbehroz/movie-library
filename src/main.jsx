import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";  // Import BrowserRouter
import { HelmetProvider } from "react-helmet-async";  // Import HelmetProvider for SEO
import store from "./store";  // Import Redux store
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>  {/* Wrap your App with BrowserRouter */}
        <HelmetProvider>  {/* Add HelmetProvider here */}
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
