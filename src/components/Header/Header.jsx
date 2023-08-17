import React from "react";
import "./Header.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";
import { TOKEN_KEY } from "../../core/axios";
import { RegistrationContext } from "../../context";

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user } = React.useContext(RegistrationContext);
  const [isOpen, setIsOpen] = React.useState(false);

  const headerTitle = () => {
    if (pathname === routes.teacher) {
      return "Педагоги";
    }

    if (pathname.includes(routes.add)) {
      return "Добавление педагога";
    }

    if (pathname.includes("profile")) {
      return "Профиль педагога";
    }
  };

  const handleExitClick = () => {
    localStorage.removeItem(TOKEN_KEY);
    navigate("/");
    window.location.reload();
  };

  if (!user) {
    return null;
  }

  const toggleDropDrown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="headerContainer">
      <h3 className="headerTitle">{headerTitle()}</h3>
      <div className="headerSchool__container" onClick={toggleDropDrown}>
        <div className="headerSchool__number">
          <span className="headerSchool__number-span">
            {user?.user?.nickname}
          </span>
          <span className="headerSchool__moder-span">Модератор</span>
        </div>
        <img
          src={user?.user?.profile_photo_path}
          alt="avatar-school"
          className="avatar"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M6 9.5L12 15.5L18 9.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {isOpen && (
          <div className="list-container">
            <ul className="btn-list">
              <li className="btn-item">
                <a href="#" className="btn-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10.1833 1.6665H9.81667C9.37464 1.6665 8.95072 1.8421 8.63816 2.15466C8.3256 2.46722 8.15 2.89114 8.15 3.33317V3.48317C8.1497 3.77544 8.07255 4.0625 7.92628 4.31554C7.78002 4.56857 7.56978 4.7787 7.31667 4.92484L6.95834 5.13317C6.70497 5.27945 6.41756 5.35646 6.125 5.35646C5.83244 5.35646 5.54503 5.27945 5.29167 5.13317L5.16667 5.0665C4.78422 4.84589 4.32987 4.78604 3.90334 4.90009C3.47681 5.01415 3.11296 5.29278 2.89167 5.67484L2.70833 5.9915C2.48772 6.37395 2.42787 6.82831 2.54192 7.25484C2.65598 7.68137 2.93461 8.04521 3.31667 8.2665L3.44167 8.34984C3.69356 8.49526 3.90302 8.70408 4.04921 8.95553C4.1954 9.20698 4.27325 9.49231 4.275 9.78317V10.2082C4.27617 10.5019 4.19971 10.7906 4.05337 11.0453C3.90703 11.2999 3.69601 11.5113 3.44167 11.6582L3.31667 11.7332C2.93461 11.9545 2.65598 12.3183 2.54192 12.7448C2.42787 13.1714 2.48772 13.6257 2.70833 14.0082L2.89167 14.3248C3.11296 14.7069 3.47681 14.9855 3.90334 15.0996C4.32987 15.2136 4.78422 15.1538 5.16667 14.9332L5.29167 14.8665C5.54503 14.7202 5.83244 14.6432 6.125 14.6432C6.41756 14.6432 6.70497 14.7202 6.95834 14.8665L7.31667 15.0748C7.56978 15.221 7.78002 15.4311 7.92628 15.6841C8.07255 15.9372 8.1497 16.2242 8.15 16.5165V16.6665C8.15 17.1085 8.3256 17.5325 8.63816 17.845C8.95072 18.1576 9.37464 18.3332 9.81667 18.3332H10.1833C10.6254 18.3332 11.0493 18.1576 11.3618 17.845C11.6744 17.5325 11.85 17.1085 11.85 16.6665V16.5165C11.8503 16.2242 11.9275 15.9372 12.0737 15.6841C12.22 15.4311 12.4302 15.221 12.6833 15.0748L13.0417 14.8665C13.295 14.7202 13.5824 14.6432 13.875 14.6432C14.1676 14.6432 14.455 14.7202 14.7083 14.8665L14.8333 14.9332C15.2158 15.1538 15.6701 15.2136 16.0967 15.0996C16.5232 14.9855 16.887 14.7069 17.1083 14.3248L17.2917 13.9998C17.5123 13.6174 17.5721 13.163 17.4581 12.7365C17.344 12.31 17.0654 11.9461 16.6833 11.7248L16.5583 11.6582C16.304 11.5113 16.093 11.2999 15.9466 11.0453C15.8003 10.7906 15.7238 10.5019 15.725 10.2082V9.7915C15.7238 9.49782 15.8003 9.20904 15.9466 8.95441C16.093 8.69978 16.304 8.48834 16.5583 8.3415L16.6833 8.2665C17.0654 8.04521 17.344 7.68137 17.4581 7.25484C17.5721 6.82831 17.5123 6.37395 17.2917 5.9915L17.1083 5.67484C16.887 5.29278 16.5232 5.01415 16.0967 4.90009C15.6701 4.78604 15.2158 4.84589 14.8333 5.0665L14.7083 5.13317C14.455 5.27945 14.1676 5.35646 13.875 5.35646C13.5824 5.35646 13.295 5.27945 13.0417 5.13317L12.6833 4.92484C12.4302 4.7787 12.22 4.56857 12.0737 4.31554C11.9275 4.0625 11.8503 3.77544 11.85 3.48317V3.33317C11.85 2.89114 11.6744 2.46722 11.3618 2.15466C11.0493 1.8421 10.6254 1.6665 10.1833 1.6665Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Настройки
                </a>
              </li>
              <li className="btn-item">
                <button onClick={handleExitClick} className="btn-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.3333 14.1668L17.4999 10.0002L13.3333 5.8335"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 10H7.5"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Выйти
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
