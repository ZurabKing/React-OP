import React from "react";
import MultiSelected from "../../MultiSelected/MultiSelected";
import { SelectedClass } from "../../SelectedClass/SelectedClass";
import { FurtherComponent } from "../../Further/Further";
import Input from "../../Input/Input";

export default function FormTeacher({ disciplines, setDisciplines, name }) {
  return (
    <div
      style={{
        marginTop: "12px",
        marginBottom: "12px",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <MultiSelected disciplines={disciplines} setDisciplines={setDisciplines} />

      <SelectedClass />
      <FurtherComponent />
    </div>
  );
}
