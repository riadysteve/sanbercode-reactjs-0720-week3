import React, { Component } from "react";
import "./Tugas13.css";

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBuah: this.props.data,
      inputNama: "",
      inputHarga: "",
      inputBerat: "",
      indexofForm: -1,
    };

    this.handleNama = this.handleNama.bind(this);
    this.handleHarga = this.handleHarga.bind(this);
    this.handleBerat = this.handleBerat.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(e) {
    let index = e.target.value;
    let data = this.state.dataBuah[index];
    this.setState({
      inputNama: data.nama,
      inputHarga: data.harga,
      inputBerat: data.berat,
      indexofForm: index,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let index = this.state.indexofForm;
    // console.log(index);

    if (index === -1) {
      if (
        this.state.inputNama &&
        this.state.inputHarga &&
        this.state.inputBerat
      ) {
        this.setState({
          dataBuah: [
            ...this.state.dataBuah,
            {
              nama: this.state.inputNama,
              harga: this.state.inputHarga,
              berat: this.state.inputBerat,
            },
          ],
        });
      }
    } else {
      let data = this.state.dataBuah[index];
      data.nama = this.state.inputNama;
      data.harga = this.state.inputHarga;
      data.berat = this.state.inputBerat;
    }

    this.setState({
      inputNama: "",
      inputHarga: "",
      inputBerat: "",
      indexofForm: -1,
    });
  }

  handleNama(e) {
    this.setState({ inputNama: e.target.value });
  }

  handleDelete(e) {
    const index = e.target.value;
    const data = this.state.dataBuah;
    data.splice(index, 1);

    this.setState({ ...this.state, dataBuah: data });
  }

  handleHarga(e) {
    this.setState({ inputHarga: e.target.value });
  }

  handleBerat(e) {
    this.setState({ inputBerat: e.target.value });
  }

  render() {
    return (
      <div>
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
            {this.state.dataBuah.map((daftar, index) => (
              <tr key={index}>
                <td>{daftar.nama}</td>
                <td>{daftar.harga}</td>
                <td>{daftar.berat / 1000} kg</td>
                <td>
                  <button value={index} onClick={this.handleEdit}>
                    Edit
                  </button>
                  <button
                    className="del"
                    value={index}
                    onClick={this.handleDelete}
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
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Masukkan Nama Buah</label>
            <input
              type="text"
              value={this.state.inputNama}
              onChange={this.handleNama}
            />
          </div>
          <div className="form-group">
            <label>Masukkan Harga Buah</label>
            <input
              type="text"
              value={this.state.inputHarga}
              onChange={this.handleHarga}
            />
          </div>
          <div className="form-group">
            <label>Masukkan Berat Buah</label>
            <input
              type="text"
              value={this.state.inputBerat}
              onChange={this.handleBerat}
            />
          </div>
          <button className="submit">Tambah Data</button>
        </form>
      </div>
    );
  }
}
