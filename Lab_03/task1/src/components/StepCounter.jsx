import { useMemo, useState } from "react";

export default function StepCounter({ initialValue = 0, step = 1 }) {
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState([]);
  const [operationCount, setOperationCount] = useState(0);

  const lastFive = useMemo(() => history.slice(-5), [history]);

  const applyDelta = (delta) => {
    setCount((prev) => {
      const next = prev + delta;
      setHistory((h) => [...h, next]);
      return next;
    });
    setOperationCount((prev) => prev + 1);
  };

  const handleReset = () => {
    setCount(initialValue);
    setHistory([]);
    setOperationCount(0);
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8, marginBottom: 12 }}>
      <h3>StepCounter</h3>

      <p>
        <b>Current count:</b> {count}
      </p>
      <p>
        <b>Total operations:</b> {operationCount}
      </p>

      <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
        <button onClick={() => applyDelta(step)}>Increment (+{step})</button>
        <button onClick={() => applyDelta(-step)}>Decrement (-{step})</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div>
        <b>History (last 5):</b>
        <ul>
          {lastFive.length === 0 ? (
            <li>No history yet</li>
          ) : (
            lastFive.map((value, idx) => <li key={`${value}-${idx}`}>{value}</li>)
          )}
        </ul>
      </div>
    </div>
  );
}
