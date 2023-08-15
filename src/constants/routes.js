export const RoutesMap = {
  Auth: "auth",
  Login: "login",
  Table: "table",
  Add: "add",
  Teacher: "teacher",
  Settings: "settings",
  Profile: "profile",
};

export const routes = {
  // Аутентификация
  login: `/${RoutesMap.Auth}/${RoutesMap.Login}`,

  // Лента
  feeds: `/${RoutesMap.Feeds}`,

  // Настройки
  settings: `/${RoutesMap.Settings}`,

  // Педагоги
  teacher: `/${RoutesMap.Teacher}`,

  // Таблица
  table: `${RoutesMap.Table}`,

  //Добавление
  add: `${RoutesMap.Add}`,

  // Профиль
  profile: `${RoutesMap.Profile}/:id`,
};
