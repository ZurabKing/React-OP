import React from "react";
import "./TeacherButton.scss";

export default function TeacherButton({
  onClick,
  backcolor,
  color,
  children,
  width,
}) {
  return (
    <div>
      <button
        className="teacher-btn"
        width={width}
        onClick={onClick}
        style={{ backgroundColor: backcolor, color: color }}
      >
        {children}
      </button>
    </div>
  );
}
