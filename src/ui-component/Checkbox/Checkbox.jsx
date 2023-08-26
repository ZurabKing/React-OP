import React from "react";
import "./Checkbox.scss";

function CheckboxComponent({ children, text, handleClick, name }) {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox-container">
      <label>
        <input
        name={name}
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
            handleClick && handleClick();
          }}
        />
        {text}
      </label>
      {isChecked && <>{children}</>}
    </div>
  );
}

export default CheckboxComponent;
