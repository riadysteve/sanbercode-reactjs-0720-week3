import React, { useEffect, createContext, useState } from "react";
import axios from "axios";

export const FoodContext = createContext();
export const FoodProvider = (props) => {
  const [foodData, setFoodData] = useState(null);
  const [inputNama, setInputNama] = useState("");
  const [inputHarga, setInputHarga] = useState("");
  const [inputBerat, setInputBerat] = useState("");
  const [indexofForm, setIndexofForm] = useState(0);
  const [statusForm, setStatusForm] = useState("create");

  useEffect(() => {
    if (foodData === null) {
      axios
        .get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then((res) => {
          setFoodData(
            res.data.map((item) => {
              // console.log(item);
              return {
                id: item.id,
                name: item.name,
                price: item.price,
                weight: item.weight,
              };
            })
          );
          // console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [foodData]);

  const handleEdit = (e) => {
    let index = parseInt(e.target.value);
    let dataEdit = foodData.find((item) => item.id === index);
    // console.log(data.find((item) => item.id === index));
    // console.log(index);
    setInputNama(dataEdit.name);
    setInputHarga(dataEdit.price);
    setInputBerat(dataEdit.weight);
    setIndexofForm(index);
    setStatusForm("edit");
  };

  const handleChange = (event) => {
    if (event.target.name === "name") {
      setInputNama(event.target.value);
    } else if (event.target.name === "price") {
      setInputHarga(event.target.value);
    } else if (event.target.name === "weight") {
      setInputBerat(event.target.value);
    } else {
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let index = indexofForm;
    // console.log(index);

    if (
      inputNama.replace(/\s/g, "") !== "" &&
      inputHarga.replace(/\s/g, "") !== ""
    ) {
      if (statusForm === "create") {
        axios
          .post(`http://backendexample.sanbercloud.com/api/fruits`, {
            name: inputNama,
            price: inputHarga,
            weight: inputBerat,
          })
          .then((res) => {
            setFoodData([
              ...foodData,
              {
                id: res.data.id,
                name: inputNama,
                price: inputHarga,
                weight: inputBerat,
              },
            ]);
            // console.log(foodData);
          });
      } else if (statusForm === "edit") {
        axios
          .put(`http://backendexample.sanbercloud.com/api/fruits/${index}`, {
            name: inputNama,
            price: inputHarga,
            weight: inputBerat,
          })
          .then((res) => {
            let updatedData = foodData.find((item) => item.id === index);
            console.log(updatedData);
            updatedData.name = inputNama;
            updatedData.price = inputHarga;
            updatedData.weight = inputBerat;
            setFoodData([...foodData]);
          });
      }
    }

    setStatusForm("create");
    setIndexofForm(0);
    setInputNama("");
    setInputHarga("");
    setInputBerat("");
  };

  const handleDelete = (e) => {
    let index = parseInt(e.target.value);
    let updatedData = foodData.filter((item) => item.id !== index);
    // console.log(index);
    axios
      .delete(`http://backendexample.sanbercloud.com/api/fruits/${index}`)
      .then((res) => {
        // setData(res.data);
        console.log(res);
      });
    setFoodData([...updatedData]);
  };

  return (
    <FoodContext.Provider
      value={{
        foodData,
        setFoodData,
        inputNama,
        inputBerat,
        inputHarga,
        handleEdit,
        statusForm,
        indexofForm,
        handleSubmit,
        handleChange,
        handleDelete,
      }}
    >
      {props.children}
    </FoodContext.Provider>
  );
};
