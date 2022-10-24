import { useState } from "react";
import reactLogo from "./assets/react.svg";
import phases from "./phases.json";
import "./App.css";
import Target from "./TargetPhases";
import TargetPhases from "./TargetPhases";

function App() {
  console.log(phases);
  const randonIndex = Math.floor(Math.random() * phases.length);
  const [index, setIndex] = useState(randonIndex);
  const quotes = () => {
    const randonIndex = Math.floor(Math.random() * phases.length);
    setIndex(randonIndex);
  };
  return (
    <div className="App">
      <TargetPhases
      quotes={quotes}
      index={index}
      setIndex={setIndex}
      phases={phases} />
    </div>
  );
}

export default App;
