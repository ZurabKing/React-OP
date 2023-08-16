import React from "react";
import "./AddScan.scss";
import TeacherButton from "../../../ui-component/TeacherBtn/TeacherButton";

export default function AddScanComponent() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [imageName, setImageName] = React.useState("");
  const fileInputRef = React.useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setSelectedImage(selectedFile);
      setImageName(selectedFile.name);
    }
  };

  return (
    <div className="scan-container">
      <h4 className="scan__title">Скан диплома</h4>
      <div className="scan__block">
        <div className="scan__block-url">
          <input
            className="scan-input"
            type="text"
            placeholder="Scan_diploma.png"
            value={imageName}
          />
        </div>
        <div className="scan-btn-block">
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
        <input
          style={{ display: "none" }}
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
}
