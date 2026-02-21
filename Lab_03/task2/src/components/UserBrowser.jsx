import { useState } from "react";
import UserProfile from "./UserProfile";

export default function UserBrowser() {
  const [userId, setUserId] = useState(1);

  return (
    <div>
      <h2>User Browser</h2>

      <div style={{ marginBottom: 10 }}>
        <button onClick={() => setUserId(1)}>User 1</button>
        <button onClick={() => setUserId(2)}>User 2</button>
        <button onClick={() => setUserId(3)}>User 3</button>
      </div>

      <UserProfile userId={userId} />
    </div>
  );
}
