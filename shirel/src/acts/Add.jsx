import { useState } from "react";

const Add = (props) => {
  const [inputValue, setInputValue] = useState("");

  // Update input value on change
  const getInputValue = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle adding data to the database
  const addDb = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Sending the new todo item to the backend
    console.log('props: ', props);
    fetch(`http://localhost:3000/${props.db}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: props.id,
        title: inputValue,
        completed: false,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Added to DB:", data);

        // Updating the state with the new todo
        props.setArrData((prev) => [
          ...prev,
          {
            userId: props.id,
            id: prev.length + 1, // Generate a new unique ID (or handle it differently)
            title: inputValue,
            completed: false,
          },
        ]);

        // Clear input field after adding
        setInputValue("");
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
      });
  };

  return (
    <>
      <input type="text" onChange={getInputValue} value={inputValue} />
      <button onClick={addDb}>Add to DB</button>
    </>
  );
};

export default Add;
