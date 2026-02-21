import StepCounter from "./StepCounter";

export default function CounterApp() {
  return (
    <div>
      <h2>CounterApp</h2>

      {/* Два независимых экземпляра: у каждого свой state, потому что каждый StepCounter хранит state внутри себя */}
      <StepCounter initialValue={0} step={1} />
      <StepCounter initialValue={10} step={5} />
    </div>
  );
}
