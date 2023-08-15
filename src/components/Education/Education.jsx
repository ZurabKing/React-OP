import React, { useRef } from "react";
import "./Education.scss";
import Input from "../../ui-component/Input/Input";
import { DatePicker } from "../../ui-component/DatePicker/DatePicker";
import TeacherButton from "../../ui-component/TeacherBtn/TeacherButton";

export default function Education() {
  const [selectedOption, setSelectedOption] = React.useState("");
  const [startDate, setStartDate] = React.useState(new Date());
  const [startDate1, setStartDate1] = React.useState(new Date());
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [imageName, setImageName] = React.useState("");
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(URL.createObjectURL(imageFile));
    setImageName(imageFile.name);
  };

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
          width={314}
          name="name"
          title="Место учебы"
          placeholder={"Название учебного заведения"}
        />
      </div>
      <div className="datePickers-block">
        <DatePicker
          className="picker__input"
          title="Дата начала обучения"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <DatePicker
          className="picker__input"
          title="Дата окончания обучения"
          selected={startDate1}
          onChange={(date) => setStartDate1(date)}
        />
      </div>
      <div className="diplom-container">
        <h4>Скан диплома</h4>
        <div>
          <div className="image-upload-container">
            <TeacherButton
              onClick={handleButtonClick}
              backcolor={"var(--primery-500, #2898EC)"}
              color={"white"}
            >
              Загрузить фото
            </TeacherButton>
            <TeacherButton
              backcolor={"var(--neutral-100, #F9F9F9)"}
              color={"#000"}
              onClick={handleRemoveImage}
            >
              Удалить
            </TeacherButton>
            <input
              style={{ display: "none" }}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
            {imageName && <p>{imageName}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
