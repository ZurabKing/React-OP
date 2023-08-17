import React from "react";
import "./AddScan.scss";
import TeacherButton from "../../../ui-component/TeacherBtn/TeacherButton";

export default function AddScanComponent(props) {
  const handleRemoveImage = () => {
    props.setSelectedImage(null);
  };

  return (
    <div className="scan-container">
      <h4 className="scan__title">Скан диплома</h4>
      <div className="scan__block">
        <div className="scan__block-url">
          <input
            className="scan-input"
            type="text"
            readOnly
            placeholder="Scan_diploma.png"
            value={props.imageName}
          />
        </div>
        <div className="scan-btn-block">
          <label htmlFor={`education[${props.index}][scan]`}>
            <div className="scan__btn">Загрузить фото</div>
          </label>
          {/* <TeacherButton
            onClick={handleRemoveImage}
            backcolor={"var(--neutral-100, #F9F9F9)"}
            color={"#000"}
          >
            Удалить
          </TeacherButton> */}
        </div>
        {props.input}
      </div>
    </div>
  );
}
