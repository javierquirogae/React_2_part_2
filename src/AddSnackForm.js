import React, { useState } from "react";
import SnackOrBoozeApi from "./Api";
import "./Form.css"
import { Card } from "reactstrap";

const AddSnackForm = () => {
  const [snack, setSnack] = useState({
    id: "",
    name: "",
    description: "",
    recipe: "",
    serve: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSnack((prevSnack) => ({
      ...prevSnack,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SnackOrBoozeApi.createSnack(snack)
      .then(() => {
        console.log("Snack added successfully");
        // Reset the form
        setSnack({
          id: "",
          name: "",
          description: "",
          recipe: "",
          serve: ""
        });
      })
      .catch((error) => {
        console.error("Error adding snack:", error);
      });
  };

  return (
    <Card>
    <form onSubmit={handleSubmit}>
      <h2>Add a Snack</h2>
      <div>
        <label htmlFor="snackId">ID:</label>
        <input
          type="text"
          id="snackId"
          name="id"
          value={snack.id}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="snackName">Name:</label>
        <input
          type="text"
          id="snackName"
          name="name"
          value={snack.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="snackDescription">Description:</label>
        <textarea
          id="snackDescription"
          name="description"
          value={snack.description}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div>
        <label htmlFor="snackRecipe">Recipe:</label>
        <textarea
          id="snackRecipe"
          name="recipe"
          value={snack.recipe}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div>
        <label htmlFor="snackServe">Serve:</label>
        <input
          type="text"
          id="snackServe"
          name="serve"
          value={snack.serve}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Add Snack</button>
    </form>
    </Card>
  );
};

export default AddSnackForm;
