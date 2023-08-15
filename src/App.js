import TableComponent from "../src/components/Table/Table.jsx";
import { Route, Routes, useNavigate } from "react-router-dom";
import Authorization from "./components/Authorization/Authorization";
import { RegistrationContext } from "./context";
import React from "react";
import { TeacherPage } from "./pages";
import { routes } from "./constants/routes.js";
import { ProfileComponent } from "./components/Profile/ProfileComponent.jsx";
import { AddTeacher } from "./components/AddTeacher/AddTeacher.jsx";
import { Api } from "./api/index.js";

function App() {
  const [isAuth, setIsAuth] = React.useState(localStorage.getItem("token"));
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();

  const fetchUserProfile = async () => {
    try {
      const data = await Api.auth.getProfile();
      setUser(data);
    } catch (error) {
      alert(error);
    }
  };

  React.useEffect(() => {
    if (isAuth) {
      fetchUserProfile();
    }
  }, [isAuth]);

  if (!isAuth) {
    return (
      <RegistrationContext.Provider value={{ isAuth, setIsAuth }}>
        <Routes>
          <Route path="/" element={<Authorization />} />
        </Routes>
      </RegistrationContext.Provider>
    );
  }

  const Redirect = () => {
    React.useEffect(() => {
      navigate(routes.teacher);
    }, []);
  };

  return (
    <RegistrationContext.Provider value={{ isAuth, setIsAuth, user, setUser }}>
      <Routes>
        <Route path={"/"} element={<Redirect />} />

        {/* Педагоги */}
        <Route path={routes.teacher} element={<TeacherPage />}>
          <Route path="" element={<TableComponent />} />
          <Route path={routes.table} element={<TableComponent />} />
          <Route path={routes.add} element={<AddTeacher />} />
          <Route path={routes.profile} element={<ProfileComponent />} />
        </Route>

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </RegistrationContext.Provider>
  );
}

export default App;
