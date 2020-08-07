import React from "react";
import { FoodProvider } from "./FoodContext";
import FoodTable from "./FoodTable";
import FoodForm from "./FoodForm";

function Food() {
  return (
    <FoodProvider>
      <FoodTable />
      <FoodForm />
    </FoodProvider>
  );
}

export default Food;
