import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./tugas15/Routes";

function App() {
  // let dataHargaBuah = [
  //   { nama: "Semangka", harga: 10000, berat: 1000 },
  //   { nama: "Anggur", harga: 40000, berat: 500 },
  //   { nama: "Strawberry", harga: 30000, berat: 400 },
  //   { nama: "Jeruk", harga: 30000, berat: 1000 },
  //   { nama: "Mangga", harga: 30000, berat: 500 },
  // ];

  return (
    <div>
      <Router>
        <Routes />
      </Router>
      {/* Tugas 11 */}
      {/* <Table data={dataHargaBuah} /> */}

      {/* Tugas 12 */}
      {/* <Timer /> */}

      {/* Tugas 13 */}
      {/* <Table data={dataHargaBuah} /> */}

      {/* Tugas 14 */}
      {/* <Table14 /> */}
    </div>
  );
}

export default App;
