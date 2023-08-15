import React from "react";
import "./Table.scss";
import TableSetting from "./TableSetting/TableSetting";
import SchoolCard from "../../assets/img/school.png";
import Book from "../../assets/img/book-marked.svg";
import HeaderStudents from "../../assets/img/graduation-cap.svg";
import { TableCell } from "./TableCell";

function fetchWrapper(endpoint, options = {}) {
  const { headers, otherOptions } = options;

  return fetch(`http://data.kod06.ru/api/${endpoint}`, {
    headers: {
      Authorization: "Bearer 1142|2aqOXJWyWP9T253BEQ3ks7quV8kL2DCb0TWc1Oi4",
      ...headers,
    },
    ...otherOptions,
  });
}

function fetchTeachers() {
  return fetchWrapper("teachers");
}

const columns = [
  { id: 1, title: "ФИО" },
  { id: 2, title: "Предмет" },
  { id: 3, title: "Возраст" },
  { id: 4, title: "Опыт работы" },
  { id: 5, title: "Язык програмированния" },
];

export default function Table() {
  const [teachers, setTeachers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    fetchTeachers()
      .then((resp) => resp.json())
      .then((json) => {
        setTeachers(json);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  console.log(teachers);

  return (
    <div className="container__school">
      <div className="table-container">
        <table className="table">
          <thead>
            <tr className="TableTr">
              {columns.map((column) =>  <TableSetting key={column.id} {...column} />)}
            </tr>
          </thead>

          <tbody>
            {teachers.map((cell) => <TableCell key={cell.id} {...cell} />)}
          </tbody>
        </table>
      </div>
      <div className="schoolCard-container">
        <img src={SchoolCard} />
        <div className="schoolInfo-block">
          <h4 className="schoolInfo-title">СОШ 14</h4>
          <span className="schoolInfo-title-span">Средние Ачалуки</span>
          <span className="schoolInfo-title-span">Образованна в 1997 году</span>
          <div className="schoolInfo-teacherBlock">
            <div className="schoolInfo-teachers">
              <img src={Book} alt="" />
              <div className="schoolInfo__teachers-block">
                <h6 className="schoolInfo__teachers-title">32</h6>
                <span className="schoolInfo__teachers-span">Педагогов</span>
              </div>
            </div>
            <div className="schoolInfo-students">
              <img src={HeaderStudents} alt="" />
              <div className="schoolInfo__teachers-block">
                <h6 className="schoolInfo__teachers-title">400</h6>
                <span className="schoolInfo__teachers-span">Учеников</span>
              </div>
            </div>
          </div>
          <button className="schoolInfo__btn">
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
            Добавить преподователя
          </button>
        </div>
      </div>
    </div>
  );
}
