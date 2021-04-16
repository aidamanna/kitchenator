let menu = [];

export function get() {
  return Promise.resolve(menu);
}

export function saveWeekMenu(weekMenuJson) {
  menu = menu.concat(weekMenuJson);
}
