import React, { useRef } from "react";
import "./AddScan.scss";
import TeacherButton from "../../../ui-component/TeacherBtn/TeacherButton";

export default function AddScanComponent(props) {
  const ref = useRef(null);
  const handleRemoveImage = () => {
    props.setSelectedImage(null);
  };

  return (
    <div className="scan-container">
      <h4 className="scan__title">Скан диплома</h4>
      <label ref={ref} htmlFor={`education[${props.index}][scan]`}>
        <div className="scan__block">
          <div className="scan-btn-block">
            <div className="scan__block-url">
              <input
                className="scan-input"
                type="text"
                readOnly
                value={props.imageName}
                onClick={() => {
                  ref?.current?.click();
                }}
              />
            </div>
            <div className="scan__btn">Загрузить фото</div>
          </div>
          {props.input}
        </div>
      </label>
    </div>
  );
}
