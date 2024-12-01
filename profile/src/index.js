import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { person } from "./data";
import { ProfileCard } from "./components/ProfileCard";

function App() {
  return <ProfileCard person={person} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
