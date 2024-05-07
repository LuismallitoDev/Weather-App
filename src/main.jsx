import React  from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { AppContextProvider } from "./context/AppContext.jsx";
import './styles/General.css';

ReactDOM.createRoot(document.getElementById("container-main-app")).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
