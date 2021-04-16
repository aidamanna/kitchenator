let menu = [];

export function get() {
  return menu;
}

export function saveWeekMenu(weekMenuJson) {
  menu = menu.concat(weekMenuJson);
}
