import { useEffect } from "react";

export const DocumentEvent = () => {
  function handleEvent() {
    console.log("Event triggered");
  }

  useEffect(() => {
    document.addEventListener("click", handleEvent);

    return () => {
      document.removeEventListener("click", handleEvent);
    };
  }, []);

  return (
    <div>
      <h1>Document Event</h1>
    </div>
  );
};
