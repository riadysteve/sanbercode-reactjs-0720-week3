import React, { useContext } from "react";
import { FoodContext } from "./FoodContext";
// import axios from "axios";

function FoodTable() {
  const { foodData, handleEdit, handleDelete } = useContext(FoodContext);

  return (
    <div style={{ marginBottom: "100px" }}>
      <h1>Tabel Harga Buah</h1>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {foodData !== null &&
            foodData.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.weight / 1000} kg</td>
                  <td>
                    <button value={item.id} onClick={handleEdit}>
                      Edit
                    </button>
                    <button
                      className="del"
                      value={item.id}
                      onClick={handleDelete}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default FoodTable;
