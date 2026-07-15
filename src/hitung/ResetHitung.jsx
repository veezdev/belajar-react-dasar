import { useState } from "react";

function ResetHitung({ name }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>
        {" "}
        Hitung {name} : {count}
      </h1>
      <button onClick={handleIncrement}>Tambah</button>
    </div>
  );
}

export default ResetHitung;
