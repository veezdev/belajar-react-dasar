import { useState } from "react";

function Hitung2({ name }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>
        Hitung {name}: {count}
      </h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Hitung2;
