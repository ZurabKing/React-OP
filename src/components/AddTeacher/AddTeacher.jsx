import React from "react";
import TeacherButton from "../../ui-component/TeacherBtn/TeacherButton";
import Input from "../../ui-component/Input/Input";
import { DatePicker } from "../../ui-component/DatePicker/DatePicker";
import { Collapse } from "../../ui-component/Collapse/Collapse";
import AddFile from "./AddFile/AddFile";
import { Selected } from "../../ui-component/Selected/Selected";
import { SelectedClass } from "../../ui-component/SelectedClass/SelectedClass";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import PlusSvg from "../../assets/icons/plus.svg";
import "./AddTeacher.scss";
import Contact from "../Contact/Contact";

export function AddTeacher() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [educations, setEducations] = React.useState([true]);
  const [educations1, setEducations1] = React.useState([true]);

  const onChangeEducation = (idx) => {
    const newEducations = [...educations];
    newEducations[idx] = !newEducations[idx];

    setEducations(newEducations);
  };

  function onAddEducation() {
    setEducations([...educations, true]);
  }

  const onChangeEducation1 = (idx) => {
    const newEducations1 = [...educations1];
    newEducations1[idx] = !newEducations1[idx];

    setEducations1(newEducations1);
  };

  function onAddEducation1() {
    setEducations1([...educations1, true]);
  }

  return (
    <div>
      <div>
        <AddFile />
        <div className="fio-container">
          <Input
            className={"input"}
            width={205}
            title="Фамилия"
            placeholder="Введите фамилию"
            name="name"
          />
          <Input
            className={"input"}
            width={205}
            title="Имя"
            placeholder="Введите имя"
            name="name"
          />
          <Input
            className={"input"}
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
          <h3 className="collapse__title-block">Образование</h3>
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
            <img src={PlusSvg} alt="" />
            Добавить образование
          </TeacherButton>
        </div>
      </div>
      <div>
        <div className="AddTeacher-container">
          <h3 className="collapse__title-block">Опыт работы</h3>
          {educations1.map((education1, idx) => (
            <Collapse
              isOpen={education1}
              onToggle={() => onChangeEducation1(idx)}
              title={"Работа " + (idx + 1)}
              children={<Experience />}
            />
          ))}
          <TeacherButton
            color={"var(--bw-900-b, #000)"}
            backcolor={"var(--neutral-100, #F9F9F9)"}
            onClick={onAddEducation1}
          >
            <img src={PlusSvg} alt="plus" />
            Добавить место работы
          </TeacherButton>
        </div>
      </div>
      <div className="Contact-Addteacher">
        <Contact title="Номер" />
      </div>

      <div className="Add-block">
        <TeacherButton
          color={"var(--bw-900-w, #FFF)"}
          backcolor={"var(--primery-500, #2898EC)"}
        >
          Добавить
        </TeacherButton>
        <TeacherButton
          color={"var(--bw-900-b, #000)"}
          backcolor={"var(--neutral-100, #F9F9F9)"}
        >
          Отмена
        </TeacherButton>
      </div>
    </div>
  );
}
