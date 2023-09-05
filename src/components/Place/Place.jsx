import React from "react";
import SelectGroup from "../../ui-component/SelectGroup/SelectGroup";
import PlusSvg from "../../assets/icons/plus.svg";
import TeacherButton from "../../ui-component/TeacherBtn/TeacherButton";
import Remove from "../../assets/icons/remove.svg";
import "../Place/Place.scss";

export const Place = ({ disciplines, setDisciplines }) => {
  const [placeWork, setPlaceWork] = React.useState([""]);

  const onChangeInput = (value, index) => {
    const newValue = [...placeWork];
    newValue[index] = value;
    setPlaceWork(newValue);
  };

  const onAddPlaceWork = (e) => {
    e.preventDefault();
    setPlaceWork([...placeWork, ""]);
  };

  const onRemovePlaceWork = (index, e) => {
    e.preventDefault();

    if (placeWork.length === 1) {
      return;
    }
    const newValue = [...placeWork];
    newValue.splice(index, 1);
    setPlaceWork(newValue);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          marginBottom: "12px",
        }}
      >
        <h3 className="place-title">Должность</h3>
        <span title="Это поле обязательно" style={{ color: "red" }}>
          *
        </span>
      </div>

      {placeWork.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "start",
            gap: "8px",
            width: "100%",
            marginTop: "8px",
          }}
        >
          <SelectGroup
            required
            value={item}
            disciplines={disciplines}
            setDisciplines={setDisciplines}
          />
          {index !== 0 && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <button
                onClick={(e) => onRemovePlaceWork(index, e)}
                className="select-checkbox-block-btn"
              >
                <img src={Remove} alt="Удалить" />
              </button>
            </div>
          )}
        </div>
      ))}
      <TeacherButton
        containerProps={{ style: { marginTop: "12px" } }}
        color={"var(--bw-900-b, #000)"}
        backcolor={"var(--neutral-100, #F9F9F9)"}
        onClick={onAddPlaceWork}
      >
        <img src={PlusSvg} alt="Plus" />
        Добавить должость
      </TeacherButton>
    </>
  );
};
