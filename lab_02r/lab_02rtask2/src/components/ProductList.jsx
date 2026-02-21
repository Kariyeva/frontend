import Card from "./Card";

const products = [
  { id: 1, name: "Widget", price: 9.99 },
  { id: 2, name: "Gadget", price: 14.5 },
  { id: 3, name: "Thing", price: 6.25 }
];

export default function ProductList() {
  return (
    <>
      {products.map((product) => (
        <Card key={product.id} title={product.name}>
          <p>Price: ${product.price}</p>
        </Card>
      ))}
    </>
  );
}
