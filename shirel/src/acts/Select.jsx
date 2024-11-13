import React from 'react'

const Select = (props) => {

  return (
    <>
      <input type="text" onChange={getInputValue} />
      <button onClick={addLocalstorage}>select now </button>
    </>
  );
}

export default Select
