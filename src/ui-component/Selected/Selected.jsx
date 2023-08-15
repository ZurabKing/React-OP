import React from "react";
import './Selected.scss'

export function Selected({title}) {
  const [selectedOption, setSelectedOption] = React.useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="Selected-app">
      <h4 className="selected__title">{title}</h4>
      <select className="select-container" value={selectedOption} onChange={handleOptionChange}>
        <option value="Математика">Математика</option>
        <option value="Русский язык">Русский язык</option>
        <option value="Информатика">Информатика</option>
        <option value="Английский язык">Английский язык</option>
        <option value="Ингушский язык">Ингушский язык</option>
        <option value="География">География</option>
        <option value="Физкультура">Физкультура</option>
      </select>
      {selectedOption && undefined}
    </div>
  );
}

 
