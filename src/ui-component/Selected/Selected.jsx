import React from "react";
import "./Selected.scss";

export function Selected({ title }) {
  const [selectedOption, setSelectedOption] = React.useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="Selected-app">
      <h4 className="selected__title">{title}</h4>
      <select
        className="select-container"
        name="discipline"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="1">Математика</option>
        <option value="2">Русский язык</option>
        <option value="3">Информатика</option>
        <option value="4">Английский язык</option>
        <option value="5">Ингушский язык</option>
        <option value="6">География</option>
        <option value="7">Физкультура</option>
      </select>
      {selectedOption && undefined}
    </div>
  );
}
