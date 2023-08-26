import React from "react";
import "./Settings.scss";
import AddFile from "../AddTeacher/AddFile/AddFile";
import Input from "../../ui-component/Input/Input";
import InputDate from "../../ui-component/InputDate/InputDate";
import TeacherButton from "../../ui-component/TeacherBtn/TeacherButton";
import { toast } from "react-toastify";
import InputMask from "react-input-mask";

export default function Settings() {
  //Связано с AddFile
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [imageURL, setImageURL] = React.useState("");
  const fileInputRef = React.useRef(null);

  const formRef = React.useRef(null);

  const [value, setValue] = React.useState("");
  const [matches, setMatches] = React.useState(false);

  const handleImageChange = (e) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setSelectedImage(selectedFile);
      const imageURL = URL.createObjectURL(selectedFile);
      setImageURL(imageURL);
    }
  };

  const showErrorNotification = (e) => {
    e.preventDefault();
    toast.error("Заполните все обязательные поля.", {
      autoClose: 3000,
    });
  };

  return (
    <div>
      <form ref={formRef}>
        <div className="form-container">
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
          </div>

          <div className="input-name-scholl-container">
            <Input
              className="input3"
              title="Полное наименование школы"
              placeholder="Введите наименование"
            />
            <Input
              className="input3"
              title="Короткое наименование школы"
              placeholder="Введите наименование"
            />
          </div>

          <div className="input-adress-data-container">
            <Input
              className="input3"
              title="Адрес"
              placeholder="Введите адрес"
            />
            <InputDate style={{ width: "314px" }} title="Дата основания" />
          </div>

          <div className="settings-moderator-container">
            <h2 className="settings-moderator">Директор</h2>

            <div className="input-full-name-container">
              <Input
                className="input"
                title="Фамилия"
                placeholder="Введите фамилию"
              />
              <Input className="input" title="Имя" placeholder="Введите имя" />
              <Input
                className="input"
                title="Отчество"
                placeholder="Введите отчество"
              />
            </div>
          </div>

          <div className="contacts-container">
            <h2 className="contacts-title">Контакты</h2>
            <div className="contacts-input-number-container">
              <div className="input-container">
                <label className="input-text">Номер</label>
                <InputMask
                  className="input3"
                  style={{ border: "none" }}
                  mask="+7 (999) 999-99-99"
                  onChange={(e) => setValue(e.target.value)}
                  maskChar=""
                  placeholder="+7 (928) 321 22 22"
                />
              </div>
              <Input
                type="email"
                className="input3"
                title="Почта"
                placeholder="ya@mail.ru"
              />
            </div>
            <Input className="input3" title="Сайт" placeholder="www." />
          </div>

          <div className="Add-block">
            <TeacherButton
              color={"var(--bw-900-w, #FFF)"}
              backcolor={"var(--primery-500, #2898EC)"}
              onClick={showErrorNotification}
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
      </form>
    </div>
  );
}
