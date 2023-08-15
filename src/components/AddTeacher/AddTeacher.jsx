import React from "react";
import TeacherButton from "../../ui-component/TeacherBtn/TeacherButton";
import Input from "../../ui-component/Input/Input";
import { DatePicker } from "../../ui-component/DatePicker/DatePicker";
import { Collapse } from "../../ui-component/Collapse/Collapse";
import AddFile from "./AddFile/AddFile";
import { Selected } from "../../ui-component/Selected/Selected";
import { SelectedClass } from "../../ui-component/SelectedClass/SelectedClass";
import Education from "../Education/Education";
import "./AddTeacher.scss";

export default function AddTeacher() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [educations, setEducations] = React.useState([true]);

  const onChangeEducation = (idx) => {
    const newEducations = [...educations];
    newEducations[idx] = !newEducations[idx];

    setEducations(newEducations);
  };

  function onAddEducation() {
    setEducations([...educations, true]);
  }

  return (
    <div>
      <AddFile />
      <div className="fio-container">
        <Input
          width={205}
          title="Фамилия"
          placeholder="Введите фамилию"
          name="name"
        />
        <Input width={205} title="Имя" placeholder="Введите имя" name="name" />
        <Input
          width={205}
          title="Отчество"
          placeholder="Введите отчество"
          name="name"
        />
      </div>
      <div className="data-container">
        <DatePicker
          className="picker__input"
          title="Дата рождения"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <Selected title="Предмет преподавания" />
      </div>
      <SelectedClass />

      <div className="AddTeacher-container">
        {educations.map((education, idx) => (
          <Collapse
            isOpen={education}
            onToggle={() => onChangeEducation(idx)}
            title={"Образование " + (idx + 1)}
            children={<Education />}
          />
        ))}
        <TeacherButton
          color={"var(--bw-900-b, #000)"}
          backcolor={"var(--neutral-100, #F9F9F9)"}
          onClick={onAddEducation}
        >
          Добавить
        </TeacherButton>
      </div>
    </div>
  );
}
