export const RoutesMap = {
  Auth: "auth",
  Login: "login",
  Table: "table",
  Add: "add",
  Teacher: "teacher",
  Settings: "settings",
  Profile: "profile",
  State: "state",
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

  //Штат
  state: `/${RoutesMap.State}`,

  // Профиль
  profile: `${RoutesMap.Profile}/:id`,
};
