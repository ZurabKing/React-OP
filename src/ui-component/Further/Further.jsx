import React from "react";
import "./Further.scss";
import CheckboxComponent from "../Checkbox/Checkbox";
import Input from "../Input/Input";
import Remove from "../../assets/icons/remove.svg";
import PlusSvg from "../../assets/icons/plus.svg";
import TeacherButton from "../TeacherBtn/TeacherButton";
import { style } from "@mui/system";

export function FurtherComponent({ classNumber, classLatter }) {
  const [additionalEducations, setAdditionalEducations] = React.useState([""]);

  const onChangeInput = (value, index) => {
    const newValue = [...additionalEducations];
    newValue[index] = value;
    setAdditionalEducations(newValue);
  };

  const onAddAdditionalEducation = (e) => {
    e.preventDefault();
    setAdditionalEducations([...additionalEducations, ""]);
  };

  const onRemoveAdditionalEducation = (index, e) => {
    e.preventDefault();

    if (additionalEducations.length === 1) {
      return;
    }
    const newValue = [...additionalEducations];
    newValue.splice(index, 1);
    setAdditionalEducations(newValue);
  };

  return (
    <div className="App">
      <div className="CheckboxComponent-container">
        <CheckboxComponent text={"Учитель доп. образования"}>
          <div className="selectedClass-block">
            <h4 className="select-text-checkbox">Учитель доп. образования</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                alignItems: "flex-start",
              }}
              className="select-checkbox-block"
            >
              {additionalEducations.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    width: "100%",
                  }}
                >
                  <Input
                    value={item}
                    onChange={(e) => onChangeInput(e.target.value, index)}
                    className="input3"
                    name={`subdiscipline[${index}]`}
                    placeholder="Пример: робототехника"
                  />
                  {index !== 0 && (
                    <button
                      onClick={(e) => onRemoveAdditionalEducation(index, e)}
                      className="select-checkbox-block-btn"
                    >
                      <img src={Remove} alt="Удалить" />
                    </button>
                  )}
                </div>
              ))}
            </div>
            <TeacherButton
              containerProps={{ style: { width: "100%" } }}
              color={"var(--bw-900-b, #000)"}
              backcolor={"var(--neutral-100, #F9F9F9)"}
              onClick={onAddAdditionalEducation}
            >
              <img src={PlusSvg} alt="" />
              Добавить поле
            </TeacherButton>
          </div>
        </CheckboxComponent>
      </div>
    </div>
  );
}
