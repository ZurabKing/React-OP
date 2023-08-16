import React from "react";
import "./Checkbox.scss";

function CheckboxComponent({children,text}) {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox-container">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        {text}
      </label>
      {isChecked && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
}

export default CheckboxComponent;
