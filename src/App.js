import { MainLayout } from "./layouts/main-layout";
import TableComponent from "../src/components/Table/Table.jsx";

function App() {
  const data = [
    { name: "Тестиев Сайти Вебиев", subject: "Математика", age: 25, experience: "+7 лет" },
    { name: "Тестиев Сайти Вебиев", subject: "Математика", age: 25, experience: "+7 лет" },
    { name: "Тестиев Сайти Вебиев", subject: "Математика", age: 25, experience: "+7 лет" },
  ];
  return (
    <>
      <MainLayout>
        <TableComponent data={data} />
      </MainLayout>
    </>
  );
}

export default App;
