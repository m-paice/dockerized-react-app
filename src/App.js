import React from "react";

// components
import Editor from "./components/Editor";
import Console from "./components/Console";

import "./styles/pages/app.css";

const App = () => {
  return (
    <div className="container-app">
      <Editor />

      <Console />
    </div>
  );
};

export default App;
