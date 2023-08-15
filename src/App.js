import { MainLayout } from "./layouts/main-layout";
import TableComponent from "../src/components/Table/Table.jsx";
import AddTeacher from "./components/AddTeacher/AddTeacher";

function App() {
  const data = [
    {
      name: "Тестиев Сайти Вебиев",
      subject: "Математика",
      age: 25,
      experience: "+7 лет",
      language: "+7 лет",
    },
    {
      name: "Тестиев Сайти Вебиев",
      subject: "Математика",
      age: 25,
      experience: "+7 лет",
      language: "+7 лет",
    },
    {
      name: "Тестиев Сайти Вебиев",
      subject: "Математика",
      age: 25,
      experience: "+7 лет",
      language: "+7 лет",
    },
    {
      name: "Тестиев Сайти Вебиев",
      subject: "Математика",
      age: 25,
      experience: "+7 лет",
      language: "+7 лет",
    },
    {
      name: "Тестиев Сайти Вебиев",
      subject: "Математика",
      age: 25,
      experience: "+7 лет",
      language: "+7 лет",
    },
    {
      name: "Тестиев Сайти Вебиев",
      subject: "Математика",
      age: 25,
      experience: "+7 лет",
      language: "+7 лет",
    },
    {
      name: "Тестиев Сайти Вебиев",
      subject: "Математика",
      age: 25,
      experience: "+7 лет",
      language: "+7 лет",
    },
    {
      name: "Тестиев Сайти Вебиев",
      subject: "Математика",
      age: 25,
      experience: "+7 лет",
      language: "+7 лет",
    },
    {
      name: "Тестиев Сайти Вебиев",
      subject: "Математика",
      age: 25,
      experience: "+7 лет",
      language: "+7 лет",
    },
    {
      name: "Тестиев Сайти Вебиев",
      subject: "Математика",
      age: 25,
      experience: "+7 лет",
      language: "+7 лет",
    },
    {
      name: "Тестиев Сайти Вебиев",
      subject: "Математика",
      age: 25,
      experience: "+7 лет",
      language: "+7 лет",
    },
    {
      name: "Тестиев Сайти Вебиев",
      subject: "Математика",
      age: 25,
      experience: "+7 лет",
      language: "+7 лет",
    },
    {
      name: "Тестиев Сайти Вебиев",
      subject: "Математика",
      age: 25,
      experience: "+7 лет",
      language: "+7 лет",
    },
    {
      name: "Тестиев Сайти Вебиев",
      subject: "Математика",
      age: 25,
      experience: "+7 лет",
      language: "+7 лет",
    },
    {
      name: "Тестиев Сайти Вебиев",
      subject: "Математика",
      age: 25,
      experience: "+7 лет",
      language: "+7 лет",
    },
  ];
  return (
    <>
      <MainLayout >
        {/* <TableComponent data={data}/> */}
        <AddTeacher />
      </MainLayout>
    </>
  );
} 

export default App;
