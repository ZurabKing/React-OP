import React from "react";
import "./TeacherButton.scss";

export default function TeacherButton({
  containerProps,
  onClick,
  backcolor,
  color,
  children,
  width,
}) {
  return (
    <div {...containerProps}>
      <button
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
