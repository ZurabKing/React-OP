import React from "react";
import cn from "classnames";
import arrowImg from "../../assets/icons/Arrow.svg";

import "./Collapse.scss";

export function Collapse({ title, children, isOpen, onToggle }) {
  return (
    <div className="collapse">
      <div className="collapse__header">
        <h4 className="collapse__title">{title}</h4>
        <button
          className={cn("collapse__button", isOpen && "collapse__button--open")}
          onClick={onToggle}
        >
          <img src={arrowImg} alt="arrow" />
        </button>
      </div>
      {isOpen && <div className="collapse__content">{children}</div>}
    </div>
  );
}
