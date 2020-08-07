import React, { useContext } from "react";
import { FoodContext } from "./FoodContext";

function FoodForm() {
  const {
    inputNama,
    inputBerat,
    inputHarga,
    handleChange,
    handleSubmit,
  } = useContext(FoodContext);

  return (
    <>
      {/* Form */}
      <h3>Tambah Data</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Masukkan Nama Buah</label>
          <input
            type="text"
            name="name"
            value={inputNama}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Masukkan Harga Buah</label>
          <input
            type="text"
            name="price"
            value={inputHarga}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Masukkan Berat Buah</label>
          <input
            type="text"
            name="weight"
            value={inputBerat}
            onChange={handleChange}
          />
        </div>
        <button className="submit">Tambah Data</button>
      </form>
    </>
  );
}

export default FoodForm;
