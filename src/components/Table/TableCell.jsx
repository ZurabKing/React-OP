import React from "react";
import { calculateAge, getWorksExperience } from '../../utils/table';

export function TableCell({
  firstname,
  name,
  patronymic,
  discipline,
  born,
  works,
  languages,
}) {
  return (
    <tr>
      <td className="TableTd">{`${firstname} ${name} ${patronymic}`}</td>
      <td className="TableTd">{discipline}</td>
      <td className="TableTd">{calculateAge(born)}</td>
      <td className="TableTd">{getWorksExperience(works)}</td>
      <td className="TableTd">{languages}</td>
    </tr>
  );
}
