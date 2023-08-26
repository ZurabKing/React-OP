import React from "react";
import Input from "../../ui-component/Input/Input";
import AddScanComponent from "../AddTeacher/AddScan/AddScan";
import InputDate from "../../ui-component/InputDate/InputDate";
import Remove from "../../assets/icons/remove.svg";
import "./Education.scss";

export default function Education({ index, onRemoveEducation }) {
  const [startDate, setStartDate] = React.useState(new Date());

  const [selectedImage, setSelectedImage] = React.useState(null);
  const [imageName, setImageName] = React.useState("");
  const fileInputRef = React.useRef(null);

  const handleImageChange = (e) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setSelectedImage(selectedFile);
      setImageName(selectedFile.name);
    }
  };

  return (
    <div>
      <div className="Selected-app-block">
        <div className="Selected-app">
          <h4 className="selected__title">Вид образования</h4>
          <select
            className="select-container"
            name={`education[${index}][type]`}
          >
            <option value="среднее образование">
              среднее профессиональное образование;
            </option>
            <option value="высшее образование - бакалавриат">
              высшее образование - бакалавриат;
            </option>
            <option value="высшее образование - специалитет, магистратура">
              высшее образование - специалитет, магистратура;
            </option>
            <option value="высшее образование - аспирантура;">
              высшее образование - аспирантура;
            </option>
          </select>
        </div>

        <Input
          className={"input2"}
          width={314}
          name={`education[${index}][university]`}
          title="Место учебы"
          placeholder={"Название учебного заведения"}
        />
      </div>
      <div className="datePickers-block">
        <InputDate
          title="Дата начала обучения"
          name={`education[${index}][from]`}
          onChange={(date) => setStartDate(date)}
        />
        <InputDate
          title="Дата окончания обучения"
          name={`education[${index}][to]`}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "end",
          justifyContent: "space-between",
        }}
      >
        <div className="diplom-container">
          <AddScanComponent
            input={
              <input
                style={{ display: "none" }}
                type="file"
                name={`education[${index}][scan]`}
                id={`education[${index}][scan]`}
                onChange={handleImageChange}
              />
            }
            index={index}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            imageName={imageName}
            setImageName={setImageName}
            fileInputRef={fileInputRef}
          />
        </div>
        {index !== 0 && (
          <div>
            <button style={{ border: " none", backgroundColor: "transparent" }}>
              <img
                className="images-remove"
                src={Remove}
                onClick={onRemoveEducation}
                alt="Удалить"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
