import React from "react";
import "./Education.scss";
import Input from "../../ui-component/Input/Input";
import { DatePicker } from "../../ui-component/DatePicker/DatePicker";
import AddScanComponent from "../AddTeacher/AddScan/AddScan";

export default function Education({ index }) {
  const [startDate, setStartDate] = React.useState(new Date());
  const [startDate1, setStartDate1] = React.useState(new Date());

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
            <option value="среднее образование">среднее образование</option>
            <option value="высшее образование - бакалавриат">
              высшее образование - бакалавриат
            </option>
            <option value="высшее образование - специалитет, магистратура">
              высшее образование - специалитет, магистратура
            </option>
            <option value="высшее образование - подготовка кадров высшей квалификации">
              высшее образование - подготовка кадров высшей квалификации
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
        <DatePicker
          className="input2"
          title="Дата начала обучения"
          name={`education[${index}][from]`}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          popperPlacement="top-start"
        />
        <DatePicker
          className="input2"
          title="Дата окончания обучения"
          name={`education[${index}][to]`}
          selected={startDate1}
          onChange={(date) => setStartDate1(date)}
          popperPlacement="top-start"
        />
      </div>
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
    </div>
  );
}
