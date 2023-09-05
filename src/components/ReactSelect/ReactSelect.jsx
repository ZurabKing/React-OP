import React from "react";
import "./ReactSelect.scss";
import arrow from "../../assets/icons/Arrow.svg";

const ReactSelect = ({
  children,
  options,
  changeFunction,
  value,
  isOpen,
  setIsOpen,
}) => {
  const [openIsSelect, setOpenIsSelect] = React.useState(false);

  const openSelect = () => {
    setOpenIsSelect(true);
  };

  const closeSelect = () => {
    setOpenIsSelect(false);
  };

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("modal-overlay")) {
      closeSelect();
    }
  };

  const setActive = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    changeFunction({
      label: option.title || option.name || option.full_name || option.label,
      value: option.value,
    });
    setIsOpen(false);
  };

  return (
    <div className="react-select" onClick={(e) => setActive(e)}>
      {children}
      <p className="value">{value && value.label}</p>
      {isOpen && (
        <div onClick={handleOverlayClick}>
          <div className="select-options">
            {options.map((option) => (
              <div
                key={option.id}
                className="select-option"
                onClick={() => handleOptionClick(option)}
              >
                {option.title ||
                  option.name ||
                  option.full_name ||
                  option.label}
              </div>
            ))}
          </div>
        </div>
      )}

      {
        <img
          src={arrow}
          className={isOpen ? "react-select_img active" : "react-select_img"}
          alt="arrow"
        />
      }
    </div>
  );
};

export default ReactSelect;
