import React from "react";
import "./InputDate.scss";

export default function InputDate({
  children,
  style,
  required,
  name,
  placeholder,
  value,
  onChange,
  title,
}) {
  return (
    <div className="data-container-create">
      <div className="input-container-block">
        <h4 className="date-title">{title}</h4>
        <span>{children}</span>
      </div>
      <input
        style={style}
        required={required}
        className="input-date"
        type="date"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
