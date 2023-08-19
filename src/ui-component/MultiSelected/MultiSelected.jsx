import React from "react";
import SelectComponent from "react-select";
import Autocomplete from '@mui/material/Autocomplete';
import "./MultiSelected.scss";
import { TextField } from "@mui/material";

export default function MultiSelected({name}) {
  const [value, setValue] = React.useState('')
  const options = [
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
    { value: "история религий", label: "История религий" },
    { value: "изобразительное искусство", label: "Изобразительное искусство" },
    { value: "музыка", label: "Музыка" },
    { value: "технология", label: "Технология" },
    { value: "физическая культура", label: "Физическая культура" },
    { value: "ОБЖ", label: "ОБЖ" },
  ];

  const handleChange = (selectedOption) => {
    console.log("HandleChange", selectedOption);
  };

  return (
    <div className="multiSel-container">
      <h4 className="">Предмет преподавания</h4>
      {/* <SelectComponent
       classNames={{
        control: (state) => 'border-none'
       }}
      styles={"multiSelect"}
      className="multiSelect-container"
      classNamePrefix={'multiSelect'}
      placeholder="Выберите предмет..."
      options={options}
      onChange={handleChange}
      isMulti
    /> */}
      <Autocomplete
        multiple
        id="tags-outlined"
        options={options}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            name={name}
            value={value}
            placeholder="Выберите предмет"
          />
        )}
      />
    </div>
  );
}
