import React from 'react'

const Serch = (props) => {

     const [inputValue, setInputValue] = useState("");
     const getInputValue = (event) => {
       setInputValue(event.target.value);
     };

     const serchDb=()=>{
        if (
          inputValue === porps.todo.id ||
           porps.todo.title.includes (inputValue)||
          inputValue === porps.todo.completed
        ) {
          return true;
        }
        return false;
     };

  return (
    <>
      <input type="text" onChange={getInputValue} />
      <button onClick={serchDb}>serch now</button>

      {serchDb() && <p></p>}
    </>
  );
}

export default Serch
