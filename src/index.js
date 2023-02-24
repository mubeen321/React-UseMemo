import React, { useState, useMemo, useCallback } from "react";
import ReactDOM from "react-dom";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const label = useMemo(() => {
    console.log("computing clicks", Date.now());
    return `${count} click${count === 1 ? "" : "s"}`;
  }, [count]);
  const [time, setTime] = useState(0);
  const handleBtnClick = useCallback((p) => {
    console.log(p);
    setTime(time + 1);
  }, []);

  return (
    <div className="App">
      <h2>React useMemo Hook</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => setCount(count + 1)}>Press Me</button>

      <p>
        {name} has {label}
      </p>

      <button onClick={handleBtnClick}>click useCallback {time}</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
