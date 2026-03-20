import { useState } from "react";
import { UserCard } from "./UserCard.tsx";
import { AnalyticsChart } from "./AnalyticsChart.tsx";
import { ActivityFeed } from "./ActivityFeed.tsx";

export function Dashboard() {
  const [count, setCount] = useState(0);

  const user = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  };

  const items = ["item1", "item2", "item3"];

  return (
    <div>
      <h1>Dashboard (count: {count})</h1>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>

      <UserCard user={user} />
      <AnalyticsChart items={items} />
      <ActivityFeed />
    </div>
  );
}