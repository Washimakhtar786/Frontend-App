import { useState } from "react";
import CounterDisplay from "./components/CounterDisplay";
import CounterActions from "./components/CounterActions";
import SetCounter from "./components/SetCounter";


const MAX_LIMIT = 100;

function App() {
  const [count, setCount] = useState(0);

  const updateCounter = (newValue) => {
    if (newValue < 0) {
      setCount(0);
    } else if (newValue > MAX_LIMIT) {
      setCount(MAX_LIMIT);
    } else {
      setCount(newValue);
    }
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div>
      <CounterDisplay count={count} max={MAX_LIMIT} />
      <CounterActions
        count={count}
        max={MAX_LIMIT}
        updateCounter={updateCounter}
        resetCounter={resetCounter}
      />
      <SetCounter updateCounter={updateCounter} max={MAX_LIMIT} />
    </div>
  );
}

export default App;
