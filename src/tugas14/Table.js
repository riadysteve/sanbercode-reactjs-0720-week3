import React, { useState, useEffect } from "react";
import "../tugas13/Tugas13.css";
import axios from "axios";

const Table = () => {
  const [data, setData] = useState(null);
  const [inputNama, setInputNama] = useState("");
  const [inputBerat, setInputBerat] = useState("");
  const [inputHarga, setInputHarga] = useState("");
  const [indexofForm, setIndexofForm] = useState(0);
  const [statusForm, setStatusForm] = useState("create");

  useEffect(() => {
    if (data === null) {
      axios
        .get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then((res) => {
          setData(
            res.data.map((item) => {
              return {
                id: item.id,
                nama: item.name,
                harga: item.price,
                berat: item.weight,
              };
            })
          );
          // console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [data]);

  const handleChange = (event) => {
    if (event.target.name === "nama") {
      setInputNama(event.target.value);
    } else if (event.target.name === "harga") {
      setInputHarga(event.target.value);
    } else if (event.target.name === "berat") {
      setInputBerat(event.target.value);
    }
  };

  const handleEdit = (e) => {
    let index = parseInt(e.target.value);
    let dataEdit = data.find((item) => item.id === index);
    // console.log(data.find((item) => item.id === index));
    // console.log(index);
    setInputNama(dataEdit.nama);
    setInputHarga(dataEdit.harga);
    setInputBerat(dataEdit.berat);
    setIndexofForm(index);
    setStatusForm("edit");
  };

  const handleDelete = (e) => {
    let index = parseInt(e.target.value);
    let updatedData = data.filter((item) => item.id !== index);
    // console.log(index);
    axios
      .delete(`http://backendexample.sanbercloud.com/api/fruits/${index}`)
      .then((res) => {
        // setData(res.data);
        console.log(res);
      });
    setData([...updatedData]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let index = indexofForm;
    // console.log(index);

    if (inputNama && inputHarga && inputBerat) {
      if (statusForm === "create") {
        axios
          .post(`http://backendexample.sanbercloud.com/api/fruits`, {
            name: inputNama,
            price: inputHarga,
            weight: inputBerat,
          })
          .then((res) =>
            setData([
              ...data,
              {
                id: res.data.id,
                name: inputNama,
                price: inputHarga,
                weight: inputBerat,
              },
            ])
          );
      } else if (statusForm === "edit") {
        axios
          .put(`http://backendexample.sanbercloud.com/api/fruits/${index}`, {
            name: inputNama,
            price: inputHarga,
            weight: inputBerat,
          })
          .then((res) => {
            let updatedData = data.find((item) => item.id === index);
            updatedData.name = inputNama;
            updatedData.price = inputHarga;
            updatedData.weight = inputBerat;
            setData([...data]);
          });
      }
    }

    setStatusForm("create");
    setIndexofForm(0);
    setInputNama("");
    setInputHarga("");
    setInputBerat("");
  };

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
          {data !== null &&
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.nama}</td>
                <td>{item.harga}</td>
                <td>{item.berat / 1000} kg</td>
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
            ))}
        </tbody>
      </table>

      {/* Form */}
      <h3>Tambah Data</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Masukkan Nama Buah</label>
          <input
            type="text"
            name="nama"
            value={inputNama}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Masukkan Harga Buah</label>
          <input
            type="text"
            name="harga"
            value={inputHarga}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Masukkan Berat Buah</label>
          <input
            type="text"
            name="berat"
            value={inputBerat}
            onChange={handleChange}
          />
        </div>
        <button className="submit">Tambah Data</button>
      </form>
    </div>
  );
};

export default Table;
