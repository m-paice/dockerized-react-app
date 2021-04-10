import React from "react";

import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const redirectToPath = (path) => {
    history.push(path);
  };

  return (
    <header>
      <button onClick={() => redirectToPath("/")}> Home </button>
      <button onClick={() => redirectToPath("/login")}> Login </button>
    </header>
  );
};

export default Header;
