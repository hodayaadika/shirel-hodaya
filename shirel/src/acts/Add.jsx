import {useState} from 'react'

const add = (props) => {
    const [inputValue, setInputValue] = useState("");
    const getInputValue = (event) => {
      setInputValue(event.target.value);
    };

    const addDb=(event)=>{
      console.log("a",props.arrData);
      fetch(`http://localhost:3000/${props.db}`, {
        
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ arrData: props.arrData }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);            
            props.setArrData((prev) => ({
              ...prev,
              userId: props.id,
              id: props.arrData.length,
              title: inputValue,
              completed: false,
            }));
          });
        };
      console.log(props.arrData);
    
    
  return (
    <>
      <input type="text" onChange={getInputValue} value={inputValue} />
      {/* <label htmlFor={props.id}>{inputValue}</label> */}
      <button onClick={(event) => addDb(event)}>add to db</button>
    </>
  );
};

export default add
