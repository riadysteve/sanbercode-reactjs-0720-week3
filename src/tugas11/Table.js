import React from "react";
import "./Table.css";

const Table = () => {
  let dataHargaBuah = [
    { nama: "Semangka", harga: 10000, berat: 1000 },
    { nama: "Anggur", harga: 40000, berat: 500 },
    { nama: "Strawberry", harga: 30000, berat: 400 },
    { nama: "Jeruk", harga: 30000, berat: 1000 },
    { nama: "Mangga", harga: 30000, berat: 500 },
  ];

  return (
    <div>
      <h1>Tabel Harga Buah</h1>
      <table>
        <tr>
          <th>Nama</th>
          <th>Harga</th>
          <th>Berat</th>
        </tr>
        {dataHargaBuah.map((data) => (
          <tr>
            <td>{data.nama}</td>
            <td>{data.harga}</td>
            <td>{data.berat / 1000} kg</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
