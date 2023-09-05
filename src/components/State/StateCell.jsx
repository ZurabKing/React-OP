import React from "react";
import { calculateAge, getWorksExperience } from "../../utils/table";
import { Link } from "react-router-dom";
import "./State.scss";

export function StateCell({
  post_type,
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
  return (
    <tr>
      <td className="TableTd">{index + 1}</td>
      <td className="TableTd">
        <Link className="TableLink" to={`/teacher/profile/${id}`}>
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "28px",
              overflow: "hidden",
            }}
          >
            <img className="img-user-teacher" src={photo} />
          </div>
          {firstname} {name} {patronymic}
        </Link>
      </td>
      <td className="TableTd">{post_type}</td>
      <td className="TableTd">{calculateAge(born)}</td>
      <td className="TableTd">{getWorksExperience(works)}</td>
      <td className="TableTd">{phone}</td>
    </tr>
  );
}
