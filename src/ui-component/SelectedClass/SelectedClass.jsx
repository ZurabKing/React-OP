import React from "react";
import "./SelectedClass.scss";
import CheckboxComponent from "../Checkbox/Checkbox";
import Input from "../Input/Input";

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
      <div className="CheckboxComponent-container">
        <CheckboxComponent isChecked={true} text={"Классный руководитель"}>
          <div className="selectedClass-block">
            <h4 className="select-text-checkbox">Классный руководитель</h4>
            <div className="select-checkbox-block">
              <select
                className="selectClass-container-small"
                value={selectedOption}
                name="class"
                onChange={handleOptionChange}
              >
                <option value="1">0</option>
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
                <option value="11">11</option>
              </select>
              {selectedOption && undefined}
              <Input
                className="input2 input4"
                name="liter"
                placeholder="Литера"
              />
              {/* <select
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
            {selectedOption && undefined} */}
            </div>
          </div>
        </CheckboxComponent>
      </div>
    </div>
  );
}
