import React from "react";
import FormTeacher from "../Forms/FormTeacher/FormTeacher";
import "./SelectGroup.scss";
import Input from "../Input/Input";

export default function SelectGroup({ disciplines, setDisciplines, required }) {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderSelectedComponent = () => {
    if (selectedOption === "директор") {
      return null;
    } else if (selectedOption === "заместитель директора") {
      return null;
    } else if (selectedOption === "руководитель филиала") {
      return null;
    } else if (selectedOption === "учитель") {
      return (
        <FormTeacher
          disciplines={disciplines}
          setDisciplines={setDisciplines}
        />
      );
    } else if (selectedOption === "тифлопедагог") {
      return null;
    } else if (selectedOption === "сурдопедагог") {
      return null;
    } else if (selectedOption === "педагоги-психологи") {
      return null;
    } else if (selectedOption === "воспитатели") {
      return null;
    } else if (selectedOption === "мастера производственного обучения") {
      return null;
    } else if (selectedOption === "тьюторы") {
      return null;
    } else if (selectedOption === "учебно-вспомогательный персонал") {
      return null;
    } else if (selectedOption === "Другое") {
      return (
        <Input
          className="input2"
          name="post"
          placeholder={"Укажите должность"}
        />
      );
    }
  };
  return (
    <div className="select-group-title-container">
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <h3>Должность</h3>
          <span title="Это поле обязательно" style={{ color: "red" }}>
            *
          </span>
        </div>
        <select
          required={required}
          name="post_type"
          placeholder="Выберите должность"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="директор">Директор</option>
          <option value="заместитель директора">Заместитель директора </option>
          <option value="руководитель филиала">Руководитель филиала </option>
          <option value="учитель">Учитель</option>
          <option value="тифлопедагог">Тифлопедагог</option>
          <option value="сурдопедагог">Сурдопедагог</option>
          <option value="педагоги-психологи ">Педагоги-психологи </option>
          <option value="воспитатели">Воспитатели</option>
          <option value="мастера производственного обучения">
            Мастера производственного обучения
          </option>
          <option value="тьюторы">Тьюторы</option>
          <option value="учебно-вспомогательный персонал">
            Учебно-вспомогательный персонал
          </option>
          <option value="Другое">Другое</option>
        </select>
      </div>

      <div className="render-component">{renderSelectedComponent()}</div>
    </div>
  );
}
