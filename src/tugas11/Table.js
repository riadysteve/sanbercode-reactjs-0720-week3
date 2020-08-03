import React from "react";
import "./Table.css";

const Table = ({ data }) => {
  return (
    <div>
      <h1>Tabel Harga Buah</h1>
      <table>
        <tr>
          <th>Nama</th>
          <th>Harga</th>
          <th>Berat</th>
        </tr>
        {data.map((daftar) => (
          <tr>
            <td>{daftar.nama}</td>
            <td>{daftar.harga}</td>
            <td>{daftar.berat / 1000} kg</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
