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
    if (selectedOption === "Выбрать") {
      return null;
    } else if (selectedOption === "директор") {
      return null;
    } else if (selectedOption === "заместитель директора") {
      return null;
    } else if (selectedOption === "руководитель филиала") {
      return null;
    } else if (selectedOption === "учитель") {
      return (
        <FormTeacher
          name="discipline"
          disciplines={disciplines}
          setDisciplines={setDisciplines}
        />
      );
    } else if (selectedOption === "тифлопедагог") {
      return null;
    } else if (selectedOption === "сурдопедагог") {
      return null;
    } else if (selectedOption === "педагог-психолог") {
      return null;
    } else if (selectedOption === "воспитатель") {
      return null;
    } else if (selectedOption === "мастер производственного обучения") {
      return null;
    } else if (selectedOption === "тьютор") {
      return null;
    } else if (selectedOption === "учебно-вспомогательный персонал") {
      return null;
    } else if (selectedOption === "Другое") {
      return (
        <Input
          required
          className={"input2"}
          placeholder="Введите должность"
          name="post_experience"
        />
      );
    }
  };
  return (
    <div className="select-group-title-container">
      <div>
        <select
          className="select-group"
          required={required}
          name="post_type[]"
          placeholder="Выберите должность"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="Выбрать">Выберите должность</option>
          <option value="директор">Директор</option>
          <option value="заместитель директора">Заместитель директора </option>
          <option value="руководитель филиала">Руководитель филиала </option>
          <option value="учитель">Учитель</option>
          <option value="тифлопедагог">Тифлопедагог</option>
          <option value="сурдопедагог">Сурдопедагог</option>
          <option value="педагог-психолог">Педагог-психолог</option>
          <option value="воспитатель">Воспитатель</option>
          <option value="мастер производственного обучения">
            Мастер производственного обучения
          </option>
          <option value="тьюторы">Тьютор</option>
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
