import React, { useState } from "react";
import "./Input.scss";

export default function Input({
  children,
  type,
  required,
  value,
  onChange,
  placeholder,
  title,
  name,
  width,
  className,
  disabled,
}) {
  return (
    <div className="input-container">
      <div>
        <label className="input-text">{title}</label>
        <span>{children}</span>
      </div>

      <input
        required={required}
        disabled={disabled}
        onChange={onChange}
        width={width}
        value={value}
        className={className}
        name={name}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}
