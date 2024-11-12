import {useState} from 'react'

const Todos = () => {
    const [todo, setTodo]=useState([]);
    fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((todo) => console.log(todo))
     
        .then((todos) => {
          for (let i in todos) {
            fetch(todos[i]).then((response) => response.json())}});

  return (
      <>
        <form action="/action_page.php">
            <>
              <input
                type="checkbox"
                id={todos[i].id}
                name={todos[i].id}
                value={todos[i].id}/>

              <label htmlFor={todos[i].id}>`${todos[i].title}`</label>
                {console.log(todos[i])}
              <input type="submit" value="Submit" />
            </>
          
        </form>;
    </>
  );
};

export default Todos;
