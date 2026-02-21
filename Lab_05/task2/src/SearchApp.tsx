import { useState, type ChangeEvent, type MouseEvent } from "react";
import type { User } from "./types";

const INITIAL_DATA: User[] = [
  { name: "Alice", email: "alice@mail.com", age: 25 },
  { name: "Bob", email: "bob@mail.com", age: 30 },
  { name: "Carla", email: "carla@mail.com", age: 22 },
  { name: "Daniel", email: "daniel@mail.com", age: 28 },
  { name: "Eva", email: "eva@mail.com", age: 35 },
];

const SearchApp = () => {
  // состояние со строгими типами
  const [users] = useState<User[]>(INITIAL_DATA);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = useState("");

  // типизированный обработчик input
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);

    const lower = term.toLowerCase();
    setFilteredUsers(
      users.filter((u) => u.name.toLowerCase().includes(lower))
    );
  };

  // типизированный обработчик кнопки
  const handleClear = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSearchTerm("");
    setFilteredUsers(users);
  };

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", fontFamily: "Arial" }}>
      <h2>User Search</h2>

      <input
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by name..."
        style={{ width: "100%", padding: 10 }}
      />

      <button onClick={handleClear} style={{ marginTop: 10, padding: 8 }}>
        Clear
      </button>

      <div style={{ marginTop: 16 }}>
        {filteredUsers.length === 0 ? (
          <p>No results found</p>
        ) : (
          <ul style={{ paddingLeft: 18 }}>
            {filteredUsers.map((u) => (
              <li key={u.email}>
                {u.name} — {u.email} (Age: {u.age})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchApp;