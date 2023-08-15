import React from "react";
import "./AddFile.scss";
import TeacherButton from "../../../ui-component/TeacherBtn/TeacherButton";

export default function AddFile() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [imageURL, setImageURL] = React.useState("");
  const fileInputRef = React.useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImageURL(""); 
  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setSelectedImage(selectedFile);
      const imageURL = URL.createObjectURL(selectedFile);
      setImageURL(imageURL);
    }
  };
  return (
    <div className="App">
      <h3 className="AddFile__title">Общее</h3>
      <div className="container">
        <div className="img-container">
          {selectedImage && (
            <div>
              <img className="img-container" src={imageURL} alt="Selected" />
            </div>
          )}
        </div>
        <div className="Add__btn-block">
          <div className="Add__btn_container">
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
          <div className="Add__btn_span-block">
            <span>
              jpg, png, svg фотография с размером не больше 1000px в обе стороны
            </span>
          </div>
        </div>

        <input
          ref={fileInputRef}
          style={{ display: "none" }}
          type="file"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
}
