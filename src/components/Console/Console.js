import React, { useState, useEffect } from "react";

import { Console, Hook, Unhook } from "console-feed";
import ScrollToBottom from "react-scroll-to-bottom";

import "../../styles/components/console.css";

const LogsContainer = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    Hook(
      window.console,
      (log) => setLogs((currLogs) => [...currLogs, log]),
      false
    );
  }, []);

  return (
    <div className="container-console">
      <ScrollToBottom className="scroll-console">
        <Console
          logs={logs}
          variant="dark"
          styles={{
            BASE_FONT_SIZE: 18,
          }}
        />
      </ScrollToBottom>
    </div>
  );
};

export default LogsContainer;
