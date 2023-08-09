import React from "react";
import "./Button.scss";

export default function Button({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropDrown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="btn-container">
      <button onClick={toggleDropDrown} className="headerSchool__logo-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M6 9.5L12 15.5L18 9.5"
            stroke= 'white'
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
}
