const menu = [];

export function get() {
  return menu;
}

export function saveWeekMenu(weekMenuJson) {
  menu.concat(weekMenuJson);
}
