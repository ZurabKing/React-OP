import React from "react";
import { calculateAge, getWorksExperience } from "../../utils/table";
import { Link } from "react-router-dom";
import "./Table.scss";

export function TableCell({
  firstname,
  name,
  patronymic,
  discipline,
  born,
  works,
  languages,
  id,
}) {
  return (
    <tr>
      <td className="TableTd">
        <Link
          className="TableLink"
          to={`profile/${id}`}
        >{`${firstname} ${name} ${patronymic}`}</Link>
      </td>
      <td className="TableTd">{discipline}</td>
      <td className="TableTd">{calculateAge(born)}</td>
      <td className="TableTd">{getWorksExperience(works)}</td>
      <td className="TableTd">{languages}</td>
    </tr>
  );
}
