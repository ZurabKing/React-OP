import React from "react";
import './InputDate.scss'

export default function InputDate({
  name,
  placeholder,
  value,
  onChange,
  title,
}) {
  return (
    <div>
      <h4 className="date-title">{title}</h4>
      <input
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
