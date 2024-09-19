import { useState } from "react";
import "./App.css";
import { Timer } from "./components/Timer/Timer";
import { DocumentEvent } from "./components/DocumentEvent/DocumentEvent";

function App() {
  const [toggleTimer, setToggleTimer] = useState(false);
  const [toggleDocumentEvent, setToggleDocumentEvent] = useState(false);
  return (
    <>
      <h1>Hello from React App</h1>
      <button onClick={() => setToggleTimer(!toggleTimer)}>Toggle Timer</button>
      {toggleTimer ? <Timer /> : null}
      <button onClick={() => setToggleDocumentEvent(!toggleDocumentEvent)}>
        Toggle Document Event
      </button>
      {toggleDocumentEvent ? <DocumentEvent /> : null}
    </>
  );
}

export default App;
