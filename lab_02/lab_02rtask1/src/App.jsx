function App() {
  const items = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" }
  ];

  return (
    <>
      <header>
        <h1>Fragment Layout</h1>
      </header>

      <main>
        <h2>My Items</h2>

        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>

        <p>Total: {items.length} items</p>
      </main>

      <footer>
        <small>© 2026</small>
      </footer>
    </>
  );
}

export default App;

