import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Timer from "../tugas12/Timer";
import Table13 from "../tugas13/Table";
import Table14 from "../tugas14/Table";
import Food from "./Food";
import Table11 from "../tugas11/Table";

const Routes = () => {
  let dataHargaBuah = [
    { nama: "Semangka", harga: 10000, berat: 1000 },
    { nama: "Anggur", harga: 40000, berat: 500 },
    { nama: "Strawberry", harga: 30000, berat: 400 },
    { nama: "Jeruk", harga: 30000, berat: 1000 },
    { nama: "Mangga", harga: 30000, berat: 500 },
  ];

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Tugas 11</Link>
          </li>
          <li>
            <Link to="/tugas12">Tugas 12</Link>
          </li>
          <li>
            <Link to="/tugas13">Tugas 13</Link>
          </li>
          <li>
            <Link to="/tugas14">Tugas 14</Link>
          </li>
          <li>
            <Link to="/tugas15">Tugas 15</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/tugas12">
          <Timer />
        </Route>
        <Route path="/tugas13">
          <Table13 data={dataHargaBuah} />
        </Route>
        <Route path="/tugas14">
          <Table14 />
        </Route>
        <Route path="/tugas15">
          <Food />
        </Route>
        <Route path="/">
          <Table11 data={dataHargaBuah} />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
