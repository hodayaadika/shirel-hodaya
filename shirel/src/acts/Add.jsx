import {useState} from 'react'

const add = (props) => {
    const [inputValue, setInputValue] = useState("");
    const getInputValue = (event) => {
      setInputValue(event.target.value);
    };

    const addLocalstorage=()=>{
      props.setTodo((prev) => ({...prev, 
        userId: props.todo[0].userId,
        id: props.todo.length,
        title: inputValue,
        completed: false,
      }));
      console.log(props.todo)
    };
    
  return (
    <>
      <input type="text" onChange={getInputValue} />
      <button onClick={addLocalstorage}>add to local storage </button>
    </>
  );
};

export default add
