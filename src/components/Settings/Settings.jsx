import React from "react";
import "./Settings.scss";
import AddFile from "../AddTeacher/AddFile/AddFile";
import Input from "../../ui-component/Input/Input";
import InputDate from "../../ui-component/InputDate/InputDate";
import TeacherButton from "../../ui-component/TeacherBtn/TeacherButton";
import InputMask from "react-input-mask";
import { errorNotification } from "../../utils/errorNotification";
import { Api } from "../../api";
import { RegistrationContext } from "../../context";

export default function Settings() {
  const [selectedInfo, setSelectedInfo] = React.useState([]);
  const [value, setValue] = React.useState("");
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [imageURL, setImageURL] = React.useState("");
  const fileInputRef = React.useRef(null);
  const { user, setUser } = React.useContext(RegistrationContext);
  const [values, setValues] = React.useState({});
  const formRef = React.useRef(null);

  React.useEffect(() => {
    setValues(user?.target);
    setSelectedImage(user?.target?.photo);
  }, [user]);

  const handleImageChange = (e) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setSelectedImage(selectedFile);
      const imageURL = URL.createObjectURL(selectedFile);
      setImageURL(imageURL);
    }
  };

  const handleInputChange = (fieldName, value) => {
    setValues((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    try {
      const data = await Api.settings.postSettings(user?.target?.id, formData);
      setUser({ ...user, target: data.data });
      alert("Вы изменили настройки профиля!");
    } catch (error) {
      errorNotification(error);
    }
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="form-container">
          <AddFile
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            imageURL={imageURL || values?.photo}
            setImageURL={setImageURL}
            fileInputRef={fileInputRef}
            input={
              <input
                ref={fileInputRef}
                style={{ display: "none" }}
                name="photo"
                id="photo"
                type="file"
                onChange={handleImageChange}
              />
            }
          />

          <div className="input-name-scholl-container">
            <Input
              value={values?.fullname}
              name="fullname"
              className="input3"
              title="Полное наименование школы"
              placeholder="Введите наименование"
              onChange={(e) => handleInputChange("fullname", e.target.value)}
            />
            <Input
              value={values?.shortname}
              name="shortname"
              className="input3"
              title="Короткое наименование школы"
              placeholder="Введите наименование"
              onChange={(e) => handleInputChange("shortname", e.target.value)}
            />
          </div>

          <div className="input-adress-data-container">
            <Input
              value={values?.address}
              name="address"
              className="input3"
              title="Адрес"
              placeholder="Введите адрес"
              onChange={(e) => handleInputChange("address", e.target.value)}
            />
            <InputDate
              value={values?.create_date}
              name="create_date"
              style={{ width: "314px" }}
              title="Дата основания"
              onChange={(e) => handleInputChange("create_date", e.target.value)}
            />
          </div>

          <div className="settings-moderator-container">
            <h2 className="settings-moderator">Директор</h2>

            <div className="input-full-name-container">
              <Input
                value={values?.director_surname}
                name="director_surname"
                className="input"
                title="Фамилия"
                placeholder="Введите фамилию"
                onChange={(e) =>
                  handleInputChange("director_surname", e.target.value)
                }
              />
              <Input
                value={values?.director_name}
                name="director_name"
                className="input"
                title="Имя"
                placeholder="Введите имя"
                onChange={(e) =>
                  handleInputChange("director_name", e.target.value)
                }
              />
              <Input
                value={values?.director_patronymic}
                name="director_patronymic"
                className="input"
                title="Отчество"
                placeholder="Введите отчество"
                onChange={(e) =>
                  handleInputChange("director_patronymic", e.target.value)
                }
              />
            </div>
          </div>

          <div className="contacts-container">
            <h2 className="contacts-title">Контакты</h2>
            <div className="contacts-input-number-container">
              <div className="input-container">
                <label className="input-text">Номер</label>
                <InputMask
                  value={values?.phone}
                  className="input3"
                  style={{ border: "none" }}
                  mask="+7 (999) 999-99-99"
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  maskChar=""
                  placeholder="+7 (928) 321 22 22"
                  name="phone"
                />
              </div>
              <Input
                value={values?.email}
                name="email"
                type="email"
                className="input3"
                title="Почта"
                placeholder="ya@mail.ru"
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
            </div>
            <Input
              value={values?.site}
              name="site"
              className="input3"
              title="Сайт"
              placeholder="www."
              onChange={(e) => handleInputChange("site", e.target.value)}
            />
          </div>

          <div className="Add-block">
            <TeacherButton
              color="var(--bw-900-w, #FFF)"
              backcolor="var(--primery-500, #2898EC)"
              type="submit"
            >
              Сохранить
            </TeacherButton>
            <TeacherButton
              color={"var(--bw-900-b, #000)"}
              backcolor={"var(--neutral-100, #F9F9F9)"}
            >
              Отмена
            </TeacherButton>
          </div>
        </div>
      </form>
    </div>
  );
}
