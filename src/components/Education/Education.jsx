import React from "react";
import "./Education.scss";
import Input from "../../ui-component/Input/Input";
import { DatePicker } from "../../ui-component/DatePicker/DatePicker";
import TeacherButton from "../../ui-component/TeacherBtn/TeacherButton";
import AddScan from "../AddTeacher/AddFile/AddFile";
import AddScanComponent from "../AddTeacher/AddScan/AddScan";

export default function Education() {
  const [selectedOption, setSelectedOption] = React.useState("");
  const [startDate, setStartDate] = React.useState(new Date());
  const [startDate1, setStartDate1] = React.useState(new Date());

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <div className="Selected-app-block">
        <div className="Selected-app">
          <h4 className="selected__title">Вид образования</h4>
          <select
            className="select-container"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option>среднее образование</option>
            <option>высшее образование - бакалавриат</option>
            <option>высшее образование - специалитет, магистратура</option>
            <option>
              высшее образование - подготовка кадров высшей квалификации.
            </option>
          </select>
          {selectedOption && undefined}
        </div>

        <Input
          className={"input2"}
          width={314}
          name="name"
          title="Место учебы"
          placeholder={"Название учебного заведения"}
        />
      </div>
      <div className="datePickers-block">
        <DatePicker
          className="input2"
          title="Дата начала обучения"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          popperPlacement="top-start"
        />
        <DatePicker
          className="input2"
          title="Дата окончания обучения"
          selected={startDate1}
          onChange={(date) => setStartDate1(date)}
          popperPlacement="top-start"
        />
      </div>
      <div className="diplom-container">
        <AddScanComponent />
      </div>
    </div>
  );
}
