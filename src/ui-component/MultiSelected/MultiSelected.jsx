import React from "react";
import SelectComponent from "react-select";
import Autocomplete from "@mui/material/Autocomplete";
import "./MultiSelected.scss";
import { TextField } from "@mui/material";
import axios from "axios";

export default function MultiSelected({ disciplines, setDisciplines, name }) {
  React.useEffect(() => {
    axios
      .get(`https://teacher06.ru/api/${disciplines}`)
      .then((response) => {
        // Обновляем состояние компонента данными из ответа
        setDisciplines(response.disciplines);
      })
      .catch((error) => {
        console.error("Ошибка при запросе к API:", error);
      });
  }, []);

  const options = [
    { value: "Начальные классы", label: "Начальные классы" },
    { value: "русский язык", label: "Русский язык" },
    { value: "литература", label: "Литература" },
    { value: "родной язык", label: "Родной язык" },
    { value: "родная литература", label: "Родная литература" },
    { value: "иностранный язык", label: "Иностранный язык" },
    { value: "математика", label: "Математика" },
    { value: "алгебра", label: "Алгебра" },
    { value: "вероятность и статистика", label: "Вероятность и статистика" },
    { value: "информатика", label: "Информатика" },
    { value: "история", label: "История" },
    { value: "обществознание", label: "Обществознание" },
    { value: "география", label: "География" },
    { value: "физика", label: "Физика" },
    { value: "химия", label: "Химия" },
    { value: "биология", label: "Биология" },
    { value: "история религии", label: "История религии" },
    { value: "изобразительное искусство", label: "Изобразительное искусство" },
    { value: "музыка", label: "Музыка" },
    { value: "технология", label: "Технология" },
    { value: "физическая культура", label: "Физическая культура" },
    { value: "ОБЖ", label: "ОБЖ" },
  ];

  const InputStyle = {
    backgroundColor: "var(--neutral-100, #F9F9F9)",
    borderRadius: "8px",
    fontFamily: "Nunito Sans",
    fontSize: "16px",
    color: "var(--neutral-400, #5C5C5C)",
    borderRadius: "4px",
    outline: "none",
  };

  const handleAutocompleteChange = (_, newValue) => {
    setDisciplines(newValue.map((option) => option.value));
  };

  return (
    <div className="multiSel-container">
      <h4 className="">Предмет преподавания</h4>
      <Autocomplete
        multiple
        style={InputStyle}
        id="tags-outlined"
        options={options}
        filterSelectedOptions
        classes={{ root: "root" }}
        onChange={handleAutocompleteChange}
        renderInput={(params) => (
          <TextField {...params} placeholder="Выберите предмет" />
        )}
      />
    </div>
  );
}
