import React from "react";
import "../../components/Navbar/Navbar.scss";
import Logo from "../../assets/Navbar/Logo.png";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../constants/routes";

export default function Navbar() {
  const { pathname } = useLocation();

  const active = "active-sidebarContainer-link sidebarContainer-link";

  const isTeacherClassNames = pathname.includes("teacher")
    ? active
    : "sidebarContainer-link";

  const isStudentClassNames = pathname.includes("student")
    ? active
    : "sidebarContainer-link";

  return (
    <div className="navbarContainer">
      <div>
        <div className="navbarLogo">
          <Link to={"/"}>
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="sidebarContainer">
          <Link to={routes.teacher} className={isTeacherClassNames}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10 2V10L13 7L16 10V2"
                stroke="#B7B7B7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20"
                stroke="#B7B7B7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z"
                stroke="#B7B7B7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Учителя
          </Link>
          {/* <Link to={"/"} className={isStudentClassNames}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14 9C14 9.53043 13.7893 10.0391 13.4142 10.4142C13.0391 10.7893 12.5304 11 12 11H6L2 15V4C2 2.9 2.9 2 4 2H12C12.5304 2 13.0391 2.21071 13.4142 2.58579C13.7893 2.96086 14 3.46957 14 4V9Z"
                stroke="#B7B7B7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V22L18 18H12C11.4696 18 10.9609 17.7893 10.5858 17.4142C10.2107 17.0391 10 16.5304 10 16V15"
                stroke="#B7B7B7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Ученики
          </Link> */}
        </div>
      </div>

      {/* <div className="sidebar-info">
        <a href="!#" className="sidebarInfo-link">
          Правила сайта
        </a>
        <a href="!#" className="sidebarInfo-link">
          Политика конфиденциальности
        </a>
        <span className="sidebarInfo-span">
          © 2021-2023 LLC «AIS». <br />
          Все права защищены.
        </span>
      </div> */}
    </div>
  );
}
