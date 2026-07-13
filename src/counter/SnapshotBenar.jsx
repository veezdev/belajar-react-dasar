import { useState } from "react";

function SnapshotBenar() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          // Kalo harapannya biar berubah sebanyak 3x
          // kita bisa setCount((c) => c + 1) sebanyak 3x, karena kita menggunakan callback function, sehingga setiap kali kita memanggil setCount,
          // kita akan mendapatkan nilai count yang terbaru
          setCount((c) => c + 1); // jadi setCount akan memanggil callback function parameter c buat simpan (0 + 1) = 1 dan disimpan di count state
          setCount((c) => c + 1); // lalu setCount akan membawanya ke callback function parameter c buat simpan (1 + 1) = 2 dan disimpan di count state
          setCount((c) => c + 1); // lalu setCount akan membawanya ke callback function parameter c buat simpan (2 + 1) = 3 dan disimpan di count state
          // jadi hasilnya count bertambah jadi 3 bukan 1
          // karena kita menggunakan callback function, sehingga setiap kali kita memanggil setCount,
          // kita akan mendapatkan nilai count yang terbaru
          // dan ini akan ditampilkan kedalam DOM
          setCount((c) => c + 1);
          console.log("count", count); // disini naik sebanyak 3x dan ditampilkan kedalam DOM
        }}
      >
        button {count}
      </button>
    </div>
  );
}

export default SnapshotBenar;
