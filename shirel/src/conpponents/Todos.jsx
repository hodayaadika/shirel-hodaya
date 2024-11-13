import {useState, useEffect} from 'react'
import Add from "../acts/Add"
import Serch from '../acts/Serch';

const Todos = (props) => {
    const [todo, setTodo]=useState([]);
    const [showGreeting, setShowGreeting] = useState(false);
    
    const handleClick = () => {
      setShowGreeting(true);
    };

     const handleChange = (event, id) => {
       setTodo((prev) => {
         return prev.map((todoItem) => {
           if (todoItem.id === id) {
             return { ...todoItem, completed: !todoItem.completed };
           }
           return todoItem;
         });
       });
     };

     useEffect(() => {
        console.log("userId:", props.userId); 
       fetch(`http://localhost:3000/todos/?userId=${props.userId}`)
         .then((response) => response.json())
         .then((data) => {
           console.log(data);
           setTodo(data);
         })
         .catch((error) => console.error("שגיאה בטעינת המטלות:", error));
     }, [props.userId]);

  return (
    <>
      <h1>to do list</h1>
      <ul>
        {todo.map((todo) => (
          <li key={todo.id}>
            <input
              checked={todo.completed}
              onChange={(event) => handleChange(event, todo.id)}
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
      {showGreeting && <Add todo={todo} setTodo={setTodo} />}
      <button onClick={handleClick}>serch</button>
      {showGreeting && <Serch todo={todo} />}
    </>
  );
};

export default Todos;
