const menu = [];

export function get() {
  return menu;
}

export function saveDayMenu(
  date,
  lunchTitle,
  lunchLink,
  dinnerTitle,
  dinnerLink
) {
  const dayMenuJson = {
    date,
    lunch: {
      title: lunchTitle,
      link: lunchLink,
    },
    dinner: {
      title: dinnerTitle,
      link: dinnerLink,
    },
  };

  menu.push(dayMenuJson);
}
