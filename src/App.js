import React from "react";
import "./App.css";
import Table from "./tugas11/Table";
import Timer from "./tugas12/Timer";

function App() {
  let dataHargaBuah = [
    { nama: "Semangka", harga: 10000, berat: 1000 },
    { nama: "Anggur", harga: 40000, berat: 500 },
    { nama: "Strawberry", harga: 30000, berat: 400 },
    { nama: "Jeruk", harga: 30000, berat: 1000 },
    { nama: "Mangga", harga: 30000, berat: 500 },
  ];

  return (
    <div>
      {/* Tugas 11 */}
      <Table data={dataHargaBuah} />
      {/* Tugas 12 */}
      <Timer />
    </div>
  );
}

export default App;
