import React from "react";
import "./State.scss";
import TableSetting from "./TableSetting/TableSetting";
import Book from "../../assets/img/book-marked.svg";
import HeaderStudents from "../../assets/img/graduation-cap.svg";
import { StateCell } from "./StateCell";
import { RegistrationContext } from "../../context";
import { Link } from "react-router-dom";
import loading from "../../assets/img/loader.gif";
import axios from "axios";
import ReactSelect from "../ReactSelect/ReactSelect";
import { useClickAway } from "@uidotdev/usehooks";
import NoDate from "../../assets/icons/no-date.svg";

function fetchTeachers() {
  return axios.get("https://teacher06.ru/api/state");
}
function fetchFiltredTeachers(value) {
  return axios.get(`https://teacher06.ru/api/state?post_type=${value}`);
}

const cours = [
  { value: "all", label: "Все" },
  { value: "учитель", label: "Учитель" },
  { value: "директор", label: "Директор" },
  { value: "заместитель директора", label: "Заместитель директора" },
  { value: "руководитель филиала", label: "Руководитель филиала" },
  { value: "воспитатели", label: "Воспитатель" },
  { value: "педагоги-психологи", label: "Педагог-психолог" },
  {
    value: "мастера производственного обучения",
    label: "Мастера производственного обучения",
  },
  { value: "тьюторы", label: "Тьютор" },
  {
    value: "учебно-вспомогательный персонал",
    label: "Учебно-вспомогательный персонал",
  },
  { value: "тифлопедагог", label: "Тифлопедагог" },
  { value: "сурдопедагог", label: "Сурдопедагог" },
  { value: "другое", label: "Другое" },
];

const columns = [
  { id: 0, title: "№" },
  { id: 1, title: "ФИО" },
  { id: 2, title: "Должность" },
  { id: 3, title: "Возраст" },
  { id: 4, title: "Опыт работы" },
  { id: 5, title: "Номер телефона" },
];

export default function State() {
  const [teachers, setTeachers] = React.useState([]);
  const [value, setValue] = React.useState(cours[0]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const { user } = React.useContext(RegistrationContext);

  const filterSelect = React.useRef(null);

  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  React.useEffect(() => {
    setIsLoading(true);
    fetchTeachers().then(({ data }) => {
      setTeachers(data);
      setIsLoading(false);
    });
  }, []);

  if (!user?.user) {
    return null;
  }

  if (isLoading) {
    return (
      <img
        src={loading}
        alt="Loader"
        style={{
          width: 54,
          height: 54,
        }}
      />
    );
  }

  const filterByActivity = async (option) => {
    let data;
    setValue(option);
    try {
      data = (await fetchFiltredTeachers(option.value)).data;
      setTeachers(data);
    } catch (error) {
      console.log("У вас ошибка", error);
    }
  };

  return (
    <>
      <div className="header-select-btn">
        <div ref={ref}>
          <ReactSelect
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            value={value}
            options={cours}
            changeFunction={(option) => filterByActivity(option)}
          >
            <p className="select__placeholder">Должность:</p>
          </ReactSelect>
        </div>
        <div>
          <Link to="add" className="schoolInfo__btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 5V19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 12H19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Добавить сотрудника
          </Link>
        </div>
      </div>
      <div className="container__school">
        <div className="table-container">
          <table className="table">
            <thead>
              <tr className="TableTr">
                {columns.map((column) => (
                  <TableSetting key={column.id} {...column} />
                ))}
              </tr>
            </thead>
            {teachers.length === 0 ? (
              <div className="no-info-container">
                <img src={NoDate} alt="no-info" />
              </div>
            ) : (
              <tbody>
                {teachers.map((cell, index) => (
                  <StateCell key={cell.id} index={index} {...cell} />
                ))}
              </tbody>
            )}
          </table>
        </div>
        {/* <div className="schoolCard-container">
          <img src={user?.target?.photo} className="schoolCard" alt="Avatar" />
          <div className="schoolInfo-block">
            <h4 className="schoolInfo-title">{user?.target?.shortname}</h4>
            <span className="schoolInfo-title-span">
              {user?.target?.address}
            </span>
            {/* <span className="schoolInfo-title-span">
            Основана в {user?.user?.born} году
          </span> */}
        {/* <div className="schoolInfo-teacherBlock">
              <div className="schoolInfo-teachers">
                <img src={Book} alt="" />
                <div className="schoolInfo__teachers-block">
                  <h6 className="schoolInfo__teachers-title">
                    {user?.teachers_count}
                  </h6>
                  <span className="schoolInfo__teachers-span">Учителей</span>
                </div>
              </div>
              <div className="schoolInfo-students">
                <img src={HeaderStudents} alt="" />
                <div className="schoolInfo__teachers-block">
                  <h6 className="schoolInfo__teachers-title">
                    {user?.pupils_count}
                  </h6>
                  <span className="schoolInfo__teachers-span">Учеников</span>
                </div>
              </div>
            </div>
            <Link to="add" className="schoolInfo__btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 5V19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 12H19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Добавить сотрудника
            </Link>
          </div>
        </div> */}
      </div>
    </>
  );
}
