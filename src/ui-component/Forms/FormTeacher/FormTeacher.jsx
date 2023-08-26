import React from "react";
import MultiSelected from "../../MultiSelected/MultiSelected";
import { SelectedClass } from "../../SelectedClass/SelectedClass";
import { FurtherComponent } from "../../Further/Further";

export default function FormTeacher({disciplines, setDisciplines}) {

  return (
    <div style={{ marginTop: "12px" }}>
      <MultiSelected
        value={disciplines}
        setSelectedValues={setDisciplines}
      />
      <SelectedClass />
      <FurtherComponent />
    </div>
  );
}
