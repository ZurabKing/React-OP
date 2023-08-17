import React from "react";
import "./Experience.scss";
import Input from "../../ui-component/Input/Input";
import { DatePicker } from "../../ui-component/DatePicker/DatePicker";

export default function Education({ index }) {
  const [selectedOption, setSelectedOption] = React.useState("");
  const [startDate, setStartDate] = React.useState(new Date());
  const [startDate1, setStartDate1] = React.useState(new Date());

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <div className="Selected-app-block">
        <div className="Selected-app"></div>
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
        <DatePicker
          className="input2"
          title="Дата начала работы"
          name={`works[${index}][from]`}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <DatePicker
          className="input2"
          name={`works[${index}][to]`}
          title="Дата увольнения"
          selected={startDate1}
          onChange={(date) => setStartDate1(date)}
        />
      </div>
    </div>
  );
}
