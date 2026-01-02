import styles from "./CounterActions.module.css";

function CounterActions({ count, updateCounter, resetCounter, max }) {
  return (
    <div className={styles.actions}>
      <button onClick={() => updateCounter(count + 1)} disabled={count >= max}>
        +1
      </button>
      <button onClick={() => updateCounter(count + 5)} disabled={count >= max}>
        +5
      </button>
      <button onClick={() => updateCounter(count + 10)} disabled={count >= max}>
        +10
      </button>

      <button onClick={() => updateCounter(count - 1)} disabled={count <= 0}>
        -1
      </button>
      <button onClick={() => updateCounter(count - 5)} disabled={count <= 0}>
        -5
      </button>

      <button className={styles.reset} onClick={resetCounter}>
        Reset
      </button>
    </div>
  );
}

export default CounterActions;
