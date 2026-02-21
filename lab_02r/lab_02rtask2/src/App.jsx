import Section from "./components/Section";
import ProductList from "./components/ProductList";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <>
      <Section title="Products">
        <ProductList />
      </Section>

      <hr />

      <Section title="Examples">
        <Card title="First Card">
          <p>Body text for the first card.</p>
        </Card>

        <Card title="Second Card" className="accent">
          <p>Body text for the second card.</p>
        </Card>
      </Section>
    </>
  );
}

export default App;
