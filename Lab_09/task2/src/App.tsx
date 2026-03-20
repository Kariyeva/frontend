import { VirtualList } from "./components/VirtualList";
import { RegularList } from "./components/RegularList";

function App() {
  return (
    <>
      <h1>Virtualized List</h1>
      <VirtualList />

      <hr />

      <h1>Regular List</h1>
      <RegularList />
    </>
  );
}

export default App;