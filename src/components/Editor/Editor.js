import React, { useState, useEffect } from "react";

import MonacoEditor from "react-monaco-editor";

import "../../styles/components/editor.css";

const Editor = ({ width, height }) => {
  const [code, setCode] = useState(`const names = ["hello", "world"];

function log() {
    return names.map(item => item);
}

console.log(log());
  `);

  useEffect(() => {
    try {
      Function(code)();
    } catch (e) {
      console.log(e);
    }
  }, [code]);

  const handleCnage = (newValue, e) => {
    setCode(newValue);
  };

  const handleEditorDidMount = (editor, monaco) => {
    editor.focus();
  };

  const options = {
    selectOnLineNumbers: true,
    minimap: {
      enabled: true,
    },
    fontSize: 18,
    wordWrap: "on",
  };

  return (
    <MonacoEditor
      language="javascript"
      theme="vs-dark"
      value={code}
      options={options}
      onChange={handleCnage}
      editorDidMount={handleEditorDidMount}
      className="container-editor"
    />
  );
};

export default Editor;
