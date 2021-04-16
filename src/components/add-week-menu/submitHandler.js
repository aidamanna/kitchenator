import * as menuRepository from "../../menuRepository";
import * as listMenus from "../list-menus/listMenus";

export function handle(e) {
  e.preventDefault();
  document.querySelector(".modal-container").remove();

  const form = e.currentTarget;
  const menuStartDate = new Date(
      form.querySelector("#question-week-menu-start-day #date").value
  );

  const weekMenuJson = [];

  form.querySelectorAll("#question-day-menu").forEach((question, i) => {
    const lunchTitle = question.querySelector("#lunch-recipe-title").value;
    const lunchLink = question.querySelector("#lunch-recipe-link").value;
    const dinnerTitle = question.querySelector("#dinner-recipe-title").value;
    const dinnerLink = question.querySelector("#dinner-recipe-link").value;

    const date = new Date(
        menuStartDate.getFullYear(),
        menuStartDate.getMonth(),
        menuStartDate.getDate() + i
    ).toISOString();

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

    weekMenuJson.push(dayMenuJson);
  });

  menuRepository.saveWeekMenu(weekMenuJson);
  listMenus.render();
}