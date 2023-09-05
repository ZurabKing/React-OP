import TableComponent from "../src/components/Table/Table.jsx";
import { Route, Routes, useNavigate } from "react-router-dom";
import Authorization from "./components/Authorization/Authorization";
import { RegistrationContext } from "./context";
import React from "react";
import { SettingsPage, TeacherPage } from "./pages";
import { routes } from "./constants/routes.js";
import { ProfileComponent } from "./components/Profile/ProfileComponent.jsx";
import { AddTeacher } from "./components/AddTeacher/AddTeacher.jsx";
import { Api } from "./api/index.js";
import { errorNotification } from "./utils/errorNotification.jsx";
import Settings from "./components/Settings/Settings.jsx";
import { StatePage } from "./pages/state/state.jsx";
import State from "./components/State/State.jsx";

function App() {
  const [isAuth, setIsAuth] = React.useState(localStorage.getItem("token"));
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();

  const fetchUserProfile = async () => {
    try {
      const data = await Api.auth.getProfile();
      setUser(data);
    } catch (error) {
      errorNotification(error);
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
      navigate(routes.state);
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

        <Route path={routes.settings} element={<SettingsPage />} />

        <Route path={routes.state} element={<StatePage />}>
          <Route path="" element={<State />} />
          <Route path={routes.table} element={<State />} />
          <Route path={routes.add} element={<AddTeacher />} />
          <Route path={routes.profile} element={<ProfileComponent />} />
        </Route>

        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </RegistrationContext.Provider>
  );
}

export default App;
