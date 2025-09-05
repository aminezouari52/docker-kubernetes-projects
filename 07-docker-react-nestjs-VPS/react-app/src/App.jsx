import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [backendMessage, setBackendMessage] = useState("");

  const isDev = import.meta.env.MODE === "development";

  const BASE_URL = isDev
    ? import.meta.env.VITE_API_BASE_URL
    : "/" + import.meta.env.VITE_API_BASE_URL;

  const callBackend = async () => {
    try {
      const res = await fetch(BASE_URL + "/hello");
      const data = await res.json();
      console.log(data);
      setBackendMessage(JSON.stringify(data));
    } catch (err) {
      console.error("Error calling backend:", err);
      setBackendMessage("Failed to fetch from backend");
    }
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={callBackend}>Call Nest Backend</button>
        <p>{backendMessage && <span>Backend says: {backendMessage}</span>}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
