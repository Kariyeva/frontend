import { useState, useCallback } from "react";
import { Button } from "./Button";

export function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div>
      <p>{count}</p>
      <Button onClick={handleClick} label="Click" />
      <Button onClick={increment} label="Increment" />
    </div>
  );
}