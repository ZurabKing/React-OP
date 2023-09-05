import React from "react";
import "./TeacherButton.scss";

export default function TeacherButton({
  containerProps,
  onClick,
  backcolor,
  color,
  children,
  width,
  type,
}) {
  return (
    <div {...containerProps}>
      <button
        type={type}
        width={width}
        className="teacher-btn"
        onClick={onClick}
        style={{ backgroundColor: backcolor, color: color }}
      >
        {children}
      </button>
    </div>
  );
}
