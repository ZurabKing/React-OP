import React, { useRef } from "react";
import "./AddScan.scss";
import TeacherButton from "../../../ui-component/TeacherBtn/TeacherButton";

export default function AddScanComponent(props) {
  return (
    <div className="scan-container">
      <h4 className="scan__title">Скан диплома</h4>

      <div className="scan__block">
        <div className="scan-btn-block">
          {props.imageName && (
            <div className="scan__block-url">
              <input
                className="scan-input"
                type="text"
                readOnly
                value={props.imageName}
              />
            </div>
          )}
          <label htmlFor={`education[${props.index}][scan]`}>
          <div className="scan__btn">Загрузить фото</div>
          </label>
        </div>
        {props.input}
      </div>
    </div>
  );
}
