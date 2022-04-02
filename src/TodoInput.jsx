import { useState } from "react";

export function TodoInput({ onAdd }) {
  let [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    if (e.target.value) {
      setInputValue(e.target.value);
    }
  };

  const handleAddButtonClick = () => {
    onAdd(inputValue);
    setInputValue("");
  };

  return (
    <>
      <input value={inputValue} onChange={handleInputChange} type="text" />
      <button onClick={handleAddButtonClick}>Add</button>
    </>
  );
}
