import React from "react";
import "./Table.scss";
import TableSetting from "./TableSetting/TableSetting";
import SchoolCard from "../../assets/img/school.png";
import Book from "../../assets/img/book-marked.svg";
import HeaderStudents from "../../assets/img/graduation-cap.svg";
import { TableCell } from "./TableCell";
import { RegistrationContext } from "../../context";
import { Link } from "react-router-dom";
import loading from "../../assets/img/loader.gif";
import axios from "axios";

function fetchTeachers() {
  return axios.get("https://teacher06.ru/api/teachers");
}

const columns = [
  { id: 0, title: "№" },
  { id: 1, title: "ФИО" },
  { id: 2, title: "Предмет" },
  { id: 3, title: "Возраст" },
  { id: 4, title: "Опыт работы" },
  { id: 5, title: "Номер телефона" },
];

export default function Table() {
  const [teachers, setTeachers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const { user } = React.useContext(RegistrationContext);

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

  return (
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
          <tbody>
            {teachers.map((cell, index) => (
              <TableCell key={cell.id} index={index} {...cell} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="schoolCard-container">
        <img src={user?.target?.photo} className="schoolCard" alt="Avatar" />
        <div className="schoolInfo-block">
          <h4 className="schoolInfo-title">{user?.target?.shortname}</h4>
          <span className="schoolInfo-title-span">{user?.target?.address}</span>
          {/* <span className="schoolInfo-title-span">
            Основана в {user?.user?.born} году
          </span> */}
          <div className="schoolInfo-teacherBlock">
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
            Добавить в штат
          </Link>
        </div>
      </div>
    </div>
  );
}
