import React from "react";
// Importing global CSS styles.
import "./styles/color.css"; // Color-related styles.
import "./styles/font.css";  // Font-related styles
import ReactDOM from "react-dom";
import App from "./App"; // Importing the App component which is the root of the React application.
import "./styles/index.css"; // General styles.
import "./styles/tailwind.css"; // Tailwind CSS framework styles.

// ReactDOM.render is the function that tells React what to render and where to render it.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"), // Specifying 'root' as the DOM node to render the App into.
);
