import React from "react";
import "./AddFile.scss";
import TeacherButton from "../../../ui-component/TeacherBtn/TeacherButton";

export default function AddFile(props) {
  const handleButtonClick = () => {
    props.fileInputRef.current.click();
  };

  const handleRemoveImage = () => {
    props.setSelectedImage(null);
    props.setImageURL("");
  };

  return (
    <div className="App">
      <h3 className="AddFile__title">Общее</h3>
      <div className="root">
        <div className="img-container">
          {props.selectedImage && (
            <img
              className="img-container"
              src={props.imageURL}
              alt="Selected"
            />
          )}
        </div>
        <div className="Add__btn-block">
          <div className="Add__btn_container">
            <TeacherButton
              onClick={handleButtonClick}
              backcolor={"var(--primery-500, #2898EC)"}
              color={"white"}
            >
              Загрузить фото
            </TeacherButton>
            <TeacherButton
              onClick={handleRemoveImage}
              backcolor={"var(--neutral-100, #F9F9F9)"}
              color={"#000"}
            >
              Удалить
            </TeacherButton>
          </div>
          <div className="Add__btn_span-block">
            <span>
              jpg, png, svg фотография с размером не больше 1000px в обе стороны
            </span>
          </div>
        </div>
        {props.input}
      </div>
    </div>
  );
}
