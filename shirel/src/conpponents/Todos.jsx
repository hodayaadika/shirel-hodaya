import {useState, useEffect} from 'react'
import Add from "../acts/Add"

const Todos = (props) => {
    const [todo, setTodo]=useState([]);
    const [showGreeting, setShowGreeting] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    
    const handleClick = () => {
      setShowGreeting(true);
    };

     const handleChange = (event) => {
       const checked = event.target.checked;
       setIsChecked(checked);
       todo.completed=checked;
       console.log(todo.completed);
     };

     useEffect(() => {
        console.log("userId:", props.userId); 
       fetch(`http://localhost:3000/todos/?userId=${props.userId}`)
         .then((response) => response.json())
         .then((data) => {
           console.log("מטלות התקבלו:", data);
           setTodo(data);
         })
         .catch((error) => console.error("שגיאה בטעינת המטלות:", error));
     }, [props.userId]);

    const arrTodo=todo;
  return (
    <>
      <h1>to do list</h1>
      <ul>
        {todo.map((todo) => (
          <li key={todo.id}>
            <input
              checked={isChecked}
              onChange={handleChange}
              type="checkbox"
              id={todo.id}
              name={todo.id}
              value={todo.id}
            />
            <label htmlFor={todo.id}>{todo.title}</label>
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>add to do</button>
      {showGreeting && <Add todo={todo} />}
    </>
  );
};

export default Todos;
