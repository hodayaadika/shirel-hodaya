import {useState} from 'react'

const Serch = (props) => {

     const [inputValue, setInputValue] = useState("");
    const arrSerch=[...props.arrData];


     const getInputValue = (event) => {
       setInputValue(event.target.value);
     };

     const serchDb=()=>{
        if (
          inputValue === arrSerch.id ||
           props.arrData.title.includes (inputValue)||
          inputValue === props.todo.completed
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
