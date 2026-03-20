import { memo } from "react";

export const Button = memo(function Button({ onClick, label }: any) {
  console.log(label, "render");
  return <button onClick={onClick}>{label}</button>;
});