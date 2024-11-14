import { useState, useEffect } from "react";
import Add from "../acts/Add";
import Serch from "../acts/Serch";

const Todos = () => {
  const [todo, setTodo] = useState([]);
  const [showGreeting, setShowGreeting] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const userId = currentUser ? currentUser.id : null;

  const handleClick = () => {
    setShowGreeting(true);
  };

  const handleChange = (event, id ,completed) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !completed }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTodo((prev) => {
          return prev.map((todoItem) => {
            if (todoItem.id === id) {
              console.log({ ...todoItem, completed: !todoItem.completed });
              return { ...todoItem, completed: !todoItem.completed };
            }
            return todoItem;
          });
        });
        console.log(todo);
      });
  };

  useEffect(() => {
    console.log("userId:", userId);
    fetch(`http://localhost:3000/todos/?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTodo(data);
      })
      .catch((error) => console.error("sorry,somthing is not ok", error));
  }, [userId]);

  return (
    <>
      <h1 className="up , font">to do list</h1>
      {/* <button onClick={handleClick}>serch</button>
      {showGreeting && <Serch arrData={todo} />} */}
      <ul>
        {todo.map((todo) => {
          console.log(todo);
          return (
            <li key={todo.id}>
              <input
                checked={todo.completed}
                onChange={(event) =>
                  handleChange(event, todo.id, todo.completed)
                }
                type="checkbox"
                id={todo.id}
                name={todo.id}
                value={todo.id}
              />
              <label htmlFor={todo.id}>{todo.title}</label>
            </li>
          );
        })}
      </ul>
      <button onClick={handleClick}>add to do</button>
      {showGreeting && (
        <Add
          arrData={todo}
          setArrData={setTodo}
          id={userId}
          completed={todo.completed}
          db="todos"
        />
      )}
    </>
  );
};

export default Todos;
