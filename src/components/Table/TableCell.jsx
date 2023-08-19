import React from "react";
import { calculateAge, getWorksExperience } from "../../utils/table";
import { Link } from "react-router-dom";
import "./Table.scss";

export function TableCell({
  photo,
  index,
  firstname,
  name,
  patronymic,
  discipline,
  born,
  works,
  phone,
  id,
}) {
  console.log(photo);
  return (
    <tr>
      <td className="TableTd">{index + 1}</td>
      <td className="TableTd">
        <Link className="TableLink" to={`profile/${id}`}>
          <img src={photo}/> {firstname} {name} {patronymic}
        </Link>
      </td>
      <td className="TableTd">{discipline}</td>
      <td className="TableTd">{calculateAge(born)}</td>
      <td className="TableTd">{getWorksExperience(works)}</td>
      <td className="TableTd">{phone}</td>
    </tr>
  );
}
