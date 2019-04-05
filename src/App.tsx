import React, { useState } from "react";
import { css } from "emotion";

interface IProps {}

export default function App(props: IProps) {
  const [value, setValue] = useState<number>(0);

  return (
    <div className={styleApp}>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>+</button>
      <button onClick={() => setValue(value - 1)}>-</button>
    </div>
  );
}

const styleApp = css`
  text-align: center;
`;
