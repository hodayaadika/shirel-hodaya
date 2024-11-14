import {useState} from 'react'

const add = (props) => {
    const [inputValue, setInputValue] = useState("");
    const getInputValue = (event) => {
      setInputValue(event.target.value);
    };

    const addLocalstorage=()=>{
      props.setArrData((prev) => ({...prev, 
        userId: props.arrData[0].userId,
        id: props.arrData.length,
        title: inputValue,
        // completed: false,
      }));
      console.log(props.arrData);
    };
    
  return (
    <>
      <input type="text" onChange={getInputValue} />
      <button onClick={addLocalstorage}>add to db </button>
    </>
  );
};

export default add
