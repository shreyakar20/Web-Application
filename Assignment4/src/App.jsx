import { useState } from "react";

import Program1 from "./Program1";
import Program2 from "./Program2";
import Program3 from "./Program3";
import Program4 from "./Program4";
import Program5 from "./Program5";
import Program6 from "./Program6";
import Program7 from "./Program7";
import Program8 from "./Program8";
import Program9 from "./Program9";
import Program10 from "./Program10";

function App() {
  const [program, setProgram] = useState(1);

  const programs = {
    1: <Program1 />,
    2: <Program2 />,
    3: <Program3 />,
    4: <Program4 />,
    5: <Program5 />,
    6: <Program6 />,
    7: <Program7 />,
    8: <Program8 />,
    9: <Program9 />,
    10: <Program10 />,
  };

  return (
    <div>
      <h1>ReactJS Lab Assignment</h1>

      <button onClick={() => setProgram(1)}>Program 1</button>
      <button onClick={() => setProgram(2)}>Program 2</button>
      <button onClick={() => setProgram(3)}>Program 3</button>
      <button onClick={() => setProgram(4)}>Program 4</button>
      <button onClick={() => setProgram(5)}>Program 5</button>
      <button onClick={() => setProgram(6)}>Program 6</button>
      <button onClick={() => setProgram(7)}>Program 7</button>
      <button onClick={() => setProgram(8)}>Program 8</button>
      <button onClick={() => setProgram(9)}>Program 9</button>
      <button onClick={() => setProgram(10)}>Program 10</button>

      <hr />

      {programs[program]}
    </div>
  );
}

export default App;