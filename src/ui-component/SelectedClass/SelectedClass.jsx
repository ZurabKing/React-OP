import React from "react";
import "./SelectedClass.scss";
import CheckboxComponent from "../Checkbox/Checkbox";

export function SelectedClass({ classNumber, classLatter }) {
  const [selectedOption, setSelectedOption] = React.useState("");
  const [selectedOption1, setSelectedOption1] = React.useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOptionChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  return (
    <div className="App">
      <h4 className="selectedClass__title">Классный руководитель?</h4>
      <div className="CheckboxComponent-container">
        <CheckboxComponent text={"Да"}>
          <div className="selectedClass-block">
            <select
              className="selectClass-container"
              value={selectedOption}
              name="class"
              onChange={handleOptionChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            {selectedOption && undefined}

            <select
              className="selectClass-container"
              value={selectedOption1}
              onChange={handleOptionChange1}
              name="liter"
            >
              <option value="А">А</option>
              <option value="Б">Б</option>
              <option value="В">В</option>
              <option value="Г">Г</option>
              <option value="Д">Д</option>
            </select>
            {selectedOption && undefined}
          </div>
        </CheckboxComponent>
      </div>
    </div>
  );
}
