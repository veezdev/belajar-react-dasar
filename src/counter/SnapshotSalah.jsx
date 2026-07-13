import { useState } from "react";

function SnapshotSalah() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          // yang kita lakukan disini adalah kita memanggil setCount sebanyak 5 kali, dan setiap kali kita memanggil setCount, kita menambahkan 1 ke count,
          // namun hal ini tidak akan berdampak pada state karena react akan menganggap kita hanya merubah sekali bukan sebanyak 3 kali,
          // sehingga hasilnya count bertambah jadi 1 bukan 3
          setCount(count + 1); // setCount(0 + 1)
          setCount(count + 1); // setCount(0 + 1)
          setCount(count + 1); // setCount(0 + 1)
          console.log("count", count); // disini naik 3x tapi tidak ditampilkan kedalam DOM
        }}
      >
        button {count}
      </button>
    </div>
  );
}

export default SnapshotSalah;
