import React, { useState } from "react";
import SnackOrBoozeApi from "./Api";
import "./Form.css"
import { Card } from "reactstrap";

const AddDrinkForm = () => {
  const [drink, setDrink] = useState({
    id: "",
    name: "",
    description: "",
    recipe: "",
    serve: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDrink((prevDrink) => ({
      ...prevDrink,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SnackOrBoozeApi.createDrink(drink)
      .then(() => {
        console.log("Drink added successfully");
        // Reset the form
        setDrink({
          id: "",
          name: "",
          description: "",
          recipe: "",
          serve: ""
        });
      })
      .catch((error) => {
        console.error("Error adding drink:", error);
      });
  };

  return (
    <Card>
    <form onSubmit={handleSubmit}>
      <h2>Add a Drink</h2>
      <div>
        <label htmlFor="drinkId">ID:</label>
        <input
          type="text"
          id="drinkId"
          name="id"
          value={drink.id}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="drinkName">Name:</label>
        <input
          type="text"
          id="drinkName"
          name="name"
          value={drink.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="drinkDescription">Description:</label>
        <textarea
          id="drinkDescription"
          name="description"
          value={drink.description}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div>
        <label htmlFor="drinkRecipe">Recipe:</label>
        <textarea
          id="drinkRecipe"
          name="recipe"
          value={drink.recipe}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div>
        <label htmlFor="drinkServe">Serve:</label>
        <input
          type="text"
          id="drinkServe"
          name="serve"
          value={drink.serve}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Add Drink</button>
    </form>
    </Card>
  );
};

export default AddDrinkForm;
