const menu = [];

export function get() {
  return menu;
}

export function saveSingleMenu(
  day,
  lunchTitle,
  lunchLink,
  dinnerTitle,
  dinnerLink
) {
  const singleMenu = {
    day,
    lunch: {
      title: lunchTitle,
      link: lunchLink,
    },
    dinner: {
      title: dinnerTitle,
      link: dinnerLink,
    },
  };

  menu.push(singleMenu);
}
