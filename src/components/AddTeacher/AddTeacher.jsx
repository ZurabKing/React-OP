import React, { useRef } from "react";
import TeacherButton from "../../ui-component/TeacherBtn/TeacherButton";
import Input from "../../ui-component/Input/Input";
import { DatePicker } from "../../ui-component/DatePicker/DatePicker";
import { Collapse } from "../../ui-component/Collapse/Collapse";
import AddFile from "./AddFile/AddFile";
import { Selected } from "../../ui-component/Selected/Selected";
import { SelectedClass } from "../../ui-component/SelectedClass/SelectedClass";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import PlusSvg from "../../assets/icons/plus.svg";
import "./AddTeacher.scss";
import { Contact } from "../Contact/Contact";
import { Api } from "../../api";
import { useNavigate } from "react-router-dom";
import MultiSelected from "../../ui-component/MultiSelected/MultiSelected";
import InputDate from "../../ui-component/InputDate/InputDate";
import { FurtherComponent } from "../../ui-component/Further/Further";
import SelectGroup from "../../ui-component/SelectGroup/SelectGroup";
import CheckboxComponent from "../../ui-component/Checkbox/Checkbox";
import { errorNotification } from "../../utils/errorNotification";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function AddTeacher() {
  const [startDate, setStartDate] = React.useState();
  const [educations, setEducations] = React.useState([1]);
  const [educations1, setEducations1] = React.useState([true]);
  const [selectedValues, setSelectedValues] = React.useState([]);

  const showErrorNotification = () => {
    toast.error("Заполните все обязательные поля.", {
      autoClose: 3000,
    });
  };

  const formRef = useRef(null);
  const navigate = useNavigate();

  const onChangeEducation = (idx) => {
    const newEducations = [...educations];
    newEducations[idx] = !newEducations[idx];

    setEducations(newEducations);
  };

  function onAddEducation(e) {
    e.preventDefault();
    setEducations([...educations, educations.length + 1]);
  }

  const onChangeEducation1 = (idx) => {
    const newEducations1 = [...educations1];
    newEducations1[idx] = !newEducations1[idx];

    setEducations1(newEducations1);
  };

  function onRemoveEducation(e, idx) {
    e.preventDefault();
    console.log(idx);
    console.log(educations);
    setEducations(educations.filter((item) => item !== idx));

    //Запасной вариант, на случай, если Адам скажет, что первый не подходит
    // setEducations(
    //   educations.map((item) => {
    //     if (item === idx) {
    //       item = false;
    //     }
    //     return item;
    //   })
    // );
  }

  console.log(educations);

  function onRemoveExperience(e, idx) {
    e.preventDefault();
    if (educations1.length === 1) {
      return;
    }
    setEducations1(educations1.filter((_, i) => idx !== i));
  }

  function onAddEducation1(e) {
    e.preventDefault();
    setEducations1([...educations1, true]);
  }

  const [selectedImage, setSelectedImage] = React.useState(null);
  const [imageURL, setImageURL] = React.useState("");
  const fileInputRef = React.useRef(null);

  const handleImageChange = (e) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setSelectedImage(selectedFile);
      const imageURL = URL.createObjectURL(selectedFile);
      setImageURL(imageURL);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    selectedValues.forEach((item) => {
      formData.append("discipline[]", item.value);
    });

    try {
      await Api.teachers.addTeacher(formData);
      navigate("/teacher");
    } catch (error) {
      showErrorNotification();

      errorNotification(error);
    }
  };

  const handleDateChange = (event) => {
    setStartDate(event.target.value);
  };

  return (
    <form ref={formRef}>
      <div className="form-container">
        <div>
          <AddFile
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            imageURL={imageURL}
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
          <div className="fio-container">
            <Input
              required
              className={"input"}
              width={205}
              title="Фамилия"
              placeholder="Введите фамилию"
              name="firstname"
            >
              <span title="Это поле обязательно" style={{ color: "red" }}>
                *
              </span>
            </Input>

            <Input
              required
              className={"input"}
              width={205}
              title="Имя"
              placeholder="Введите имя"
              name="name"
            >
              <span title="Это поле обязательно" style={{ color: "red" }}>
                *
              </span>
            </Input>
            <Input
              required
              className={"input"}
              width={205}
              title="Отчество"
              placeholder="Введите отчество"
              name="patronymic"
            >
              <span title="Это поле обязательно" style={{ color: "red" }}>
                *
              </span>
            </Input>
          </div>
          <div className="data-container">
            <div className="Multi-input-container">
              <InputDate
                required
                placeholder={"Дата рождения"}
                title={"Дата рождения"}
                name="born"
                value={startDate}
                onChange={handleDateChange}
              >
                <span title="Это поле обязательно" style={{ color: "red" }}>
                  *
                </span>
              </InputDate>
              <div className="class-container">
                <h4 className="">Категория</h4>
                <select name="skill">
                  <option value="">Нет</option>
                  <option value="Первая">Первая</option>
                  <option value="Высшая">Высшая</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <SelectGroup
              required
              disciplines={selectedValues}
              setDisciplines={setSelectedValues}
            />
          </div>
          <div style={{ marginTop: "15px" }} className="class-container">
            <h4 className="">Ученая степень</h4>
            <select name="skill">
              <option value="">Нет</option>
              <option value="Первая">Кандидат наук</option>
              <option value="Высшая">Доктор наук</option>
            </select>
          </div>

          <div className="ranks-container">
            <h4>Звания</h4>
            <div>
              <CheckboxComponent
                text="Заслуженный учитель Ингушетии"
                name="ranks[]"
              />
              <CheckboxComponent
                text="Заслуженный учитель России"
                name="ranks[]"
              />
              <CheckboxComponent
                text="Почетный работник образования"
                name="ranks[]"
              />
            </div>
          </div>

          <div className="AddTeacher-container">
            <h3 className="collapse__title-block">Образование</h3>
            <div className="collapse__container">
              {educations.map((education, idx) => (
                <>
                  {education && (
                    <Collapse
                      isOpen={education}
                      key={idx}
                      onToggle={(e) => onChangeEducation(idx)}
                      title={"Образование " + (idx + 1)}
                      children={
                        <Education
                          onRemoveEducation={(e) =>
                            onRemoveEducation(e, idx + 1)
                          }
                          index={idx}
                        />
                      }
                    />
                  )}
                </>
              ))}
            </div>
            <TeacherButton
              color={"var(--bw-900-b, #000)"}
              backcolor={"var(--neutral-100, #F9F9F9)"}
              onClick={onAddEducation}
            >
              <img src={PlusSvg} alt="" />
              Добавить образование
            </TeacherButton>
          </div>
        </div>
        <div>
          <div className="AddTeacher-container">
            <h3 className="collapse__title-block">Опыт работы</h3>
            {educations1.map((education1, idx) => (
              <Collapse
                isOpen={education1}
                onToggle={() => onChangeEducation1(idx)}
                title={"Работа " + (idx + 1)}
                children={
                  <Experience
                    onRemoveExperience={(e) => onRemoveExperience(e, idx)}
                    index={idx}
                  />
                }
              />
            ))}
            <TeacherButton
              color={"var(--bw-900-b, #000)"}
              backcolor={"var(--neutral-100, #F9F9F9)"}
              onClick={onAddEducation1}
            >
              <img src={PlusSvg} alt="plus" />
              Добавить место работы
            </TeacherButton>
          </div>
        </div>
        <div className="Contact-Addteacher">
          <Contact />
        </div>

        <div className="Add-block">
          <TeacherButton
            color={"var(--bw-900-w, #FFF)"}
            backcolor={"var(--primery-500, #2898EC)"}
            onClick={handleSubmit}
          >
            Добавить
          </TeacherButton>
          <TeacherButton
            color={"var(--bw-900-b, #000)"}
            backcolor={"var(--neutral-100, #F9F9F9)"}
          >
            Отмена
          </TeacherButton>
        </div>
        <div style={{ marginTop: "12px" }}>
          <span
            className="red-span"
            title="Это поле обязательно"
            style={{ color: "red" }}
          >
            * обязательные поля
          </span>
        </div>
      </div>
    </form>
  );
}
