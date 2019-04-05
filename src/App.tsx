import React, { useState } from "react";

interface IProps {}

export default function App(props: IProps) {
  const [value, setValue] = useState<number>(0);

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>+</button>
      <button onClick={() => setValue(value - 1)}>-</button>
    </div>
  );
}
