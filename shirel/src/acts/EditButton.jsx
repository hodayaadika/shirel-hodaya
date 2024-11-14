import React, { useState, useEffect } from "react";

function EditButton({ initialBody, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialBody);

  useEffect(() => {
    setValue(initialBody);
  }, [initialBody]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onSave(value); 
    setIsEditing(false); 
  };

  return (
    <>
      {isEditing ? (
        <>
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)} 
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
    </>
  );
}

export default EditButton;
