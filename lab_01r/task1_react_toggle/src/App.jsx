import { useState } from "react";
import "./App.css";

function App() {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleToggle = () => {
    setIsHighlighted(!isHighlighted);
  };

  return (
    <div>
      <h1>Declarative (React) Toggle</h1>

      <button onClick={handleToggle}>
        Toggle Highlight
      </button>

      <p className={isHighlighted ? "highlight" : ""}>
        Это абзац. React обновляет UI через state.
      </p>
    </div>
  );
}

export default App;

