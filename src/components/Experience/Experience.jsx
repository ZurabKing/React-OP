import React from "react";
import "./Experience.scss";
import Input from "../../ui-component/Input/Input";
import InputDate from "../../ui-component/InputDate/InputDate";
import Remove from "../../assets/icons/remove.svg";

export default function Education({ index, onRemoveExperience }) {
  const [selectedOption, setSelectedOption] = React.useState("");
  const [startDate, setStartDate] = React.useState(new Date());
  const [startDate1, setStartDate1] = React.useState(new Date());

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <div className="Selected-app-block">
        <Input
          className={"input2"}
          name={`works[${index}][work]`}
          title="Место работы"
          placeholder={"Место работы"}
        />
        <Input
          className={"input2"}
          name={`works[${index}][post]`}
          title="Должность"
          placeholder={"Напишите должность"}
        />
      </div>
      <div className="datePickers-block1">
        <InputDate
          title="Дата начала работы"
          name={`works[${index}][from]`}
          onChange={(date) => setStartDate(date)}
        />
        <InputDate
          title="Дата увольнения"
          name={`works[${index}][to]`}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      {index !== 0 && (
        <div
          style={{ display: "flex", justifyContent: "end", marginTop: "40px" }}
        >
          <button style={{ border: " none", backgroundColor: "transparent" }}>
            <img
              className="images-remove"
              src={Remove}
              onClick={onRemoveExperience}
              alt="Удалить"
            />
          </button>
        </div>
      )}
    </div>
  );
}
