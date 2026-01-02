import styles from "./CounterDisplay.module.css";

function CounterDisplay({ count, max }) {
  return (
    <div className={styles.display}>
      <h1>Counter: {count}</h1>

      {count === max && (
        <p className={styles.limit}>Maximum limit reached</p>
      )}
    </div>
  );
}

export default CounterDisplay;
