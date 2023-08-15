import React from "react";
import "./TableSetting.scss";
import Arrow from "../../../assets/Header/Arrow-black.svg";

export default function TableSetting(props) {
  return (
    <th className="TableTh">
      <div className="tableSetting-container">
        <h3 className="tableSetting-title">{props.title}</h3>
        <div className="setting-btn">
          <button className="setting">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M17.6668 3.3335H11.8335"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.50008 3.3335H2.66675"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.6667 10H10.1667"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.83341 10H2.66675"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.6667 16.6665H13.5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.1667 16.6665H2.66675"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.8335 1.6665V4.99984"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.8335 8.3335V11.6668"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.5 15V18.3333"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="setting-arrow">
            <img src={Arrow} alt="" />
          </button>
        </div>
      </div>
    </th>
  );
}
