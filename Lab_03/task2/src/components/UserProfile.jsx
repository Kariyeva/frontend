import { useEffect, useRef, useState } from "react";

export default function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const abortRef = useRef(null);

  const fetchUser = async (id) => {
    if (abortRef.current) {
      abortRef.current.abort();
    }

    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        { signal: controller.signal }
      );

      if (!response.ok) {
        throw new Error("Failed to load user");
      }

      const data = await response.json();
      setUser(data);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser(userId);

    return () => {
      if (abortRef.current) {
        abortRef.current.abort();
      }
    };
  }, [userId]);

  const handleRefresh = () => {
    const randomId = Math.floor(Math.random() * 10) + 1;
    fetchUser(randomId);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: 15, borderRadius: 8 }}>
      <h3>User Profile (ID: {userId})</h3>

      <button onClick={handleRefresh}>Refresh</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {user && !loading && (
        <div>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Phone:</b> {user.phone}</p>
          <p><b>Company:</b> {user.company?.name}</p>
        </div>
      )}
    </div>
  );
}
