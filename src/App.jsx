import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import QuestionCard from "./components/QuestionCard";
import questions from "./components/questions";

function App() {
  // const [count, setCount] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);
  return (
    <>
      <div>
        <QuestionCard
          // key={questions[currentQ].id}
          currentQ={questions[currentQ]}
        />
        <div style>
          <button
            className="nextBackButtons"
            onClick={() => setCurrentQ((currentQ) => currentQ - 1)}
          >
            Back
          </button>
          <button
            className="nextBackButtons"
            onClick={() => setCurrentQ((currentQ) => currentQ + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  );
}

export default App;
