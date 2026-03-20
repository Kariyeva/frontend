import { useMemo } from "react";

function calculate(items: string[]) {
  console.log("Calculating...");

  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += Math.sqrt(i);
  }

  return result + items.length;
}

export function AnalyticsChart({ items }: any) {
  const value = useMemo(() => calculate(items), [items]);

  console.log("Chart render");

  return (
    <div>
      <h3>Analytics</h3>
      <p>{value}</p>
    </div>
  );
}