import React, { useRef } from "react";
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
import { Api } from "../../api";
import { useNavigate } from "react-router-dom";
import MultiSelected from "../../ui-component/MultiSelected/MultiSelected";
import InputDate from "../../ui-component/InputDate/InputDate";

export function AddTeacher() {
  const [startDate, setStartDate] = React.useState();
  const [educations, setEducations] = React.useState([true]);
  const [educations1, setEducations1] = React.useState([true]);
  const formRef = useRef(null);
  const navigate = useNavigate();

  const onChangeEducation = (idx) => {
    const newEducations = [...educations];
    newEducations[idx] = !newEducations[idx];

    setEducations(newEducations);
  };

  function onAddEducation(e) {
    e.preventDefault();
    setEducations([...educations, true]);
  }

  const onChangeEducation1 = (idx) => {
    const newEducations1 = [...educations1];
    newEducations1[idx] = !newEducations1[idx];

    setEducations1(newEducations1);
  };

  function onAddEducation1(e) {
    e.preventDefault();
    setEducations1([...educations1, true]);
  }

  const [selectedImage, setSelectedImage] = React.useState(null);
  const [imageURL, setImageURL] = React.useState("");
  const fileInputRef = React.useRef(null);

  const handleImageChange = (e) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setSelectedImage(selectedFile);
      const imageURL = URL.createObjectURL(selectedFile);
      setImageURL(imageURL);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    try {
      await Api.teachers.addTeacher(formData);
      navigate("/teacher");
    } catch (error) {
      alert(error);
    }
  };

  const handleDateChange = (event) => {
    setStartDate(event.target.value);
  };

  return (
    <form ref={formRef}>
      <div>
        <AddFile
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          imageURL={imageURL}
          setImageURL={setImageURL}
          fileInputRef={fileInputRef}
          input={
            <input
              ref={fileInputRef}
              style={{ display: "none" }}
              name="photo"
              id="photo"
              type="file"
              onChange={handleImageChange}
            />
          }
        />
        <div className="fio-container">
          <Input
            className={"input"}
            width={205}
            title="Фамилия"
            placeholder="Введите фамилию"
            name="firstname"
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
            name="patronymic"
          />
        </div>
        <div className="data-container">
          <div className="Multi-input-container">
            <InputDate
              placeholder={"Дата рождения"}
              title={"Дата рождения"}
              name="born"
              value={startDate}
              onChange={handleDateChange}
            />
            {/* <DatePicker
            placeholderText="Дата рождения"
            className="picker__input"
            name="born"
            title="Дата рождения"
            // withPortal
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          /> */}
            {/* <DatePicker
            selected={startDate}
            placeholderText="Click to select a date"x
            onChange={(date) => setStartDate(date)}
            
          /> */}
            <MultiSelected name='discipline[]' />
            {/* <Selected title="Предмет преподавания" /> */}
          </div>

          <Input
            className="input2"
            name='subdiscipline'
            title={"Предмет дополнительного образования(внеурочные занятия)"}
            placeholder="Введите доп. предмет"
          />
        </div>
        <SelectedClass />
        <div className="AddTeacher-container">
          <h3 className="collapse__title-block">Образование</h3>
          <div className="collapse__container">
            {educations.map((education, idx) => (
              <Collapse
                isOpen={education}
                onToggle={(e) => onChangeEducation(idx)}
                title={"Образование " + (idx + 1)}
                children={<Education index={idx} />}
              />
            ))}
          </div>
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
              children={<Experience index={idx} />}
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
          onClick={handleSubmit}
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
    </form>
  );
}
