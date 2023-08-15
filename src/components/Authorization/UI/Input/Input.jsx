import React from "react";
import "./Input.scss";
import classNames from "classnames";

const Input = ({
  type = "text",
  inputRef,
  value,
  onChange,
  onKeyDown,
  className = "",
  placeholder,
  id,
}) => {
  let inputClass = classNames("input", `${className}`);
  return (
    <input
      onChange={onChange}
      onKeyDown={onKeyDown}
      id={id}
      type={type}
      ref={inputRef}
      className={inputClass}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
