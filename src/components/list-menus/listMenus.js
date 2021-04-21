import * as dateFormatter from "../../dateFormatter";
import * as menuRepository from "../../menuRepository";
import * as addWeekMenu from "../add-week-menu/popup";

export function render() {
  const targetElement = document.querySelector(".main-wrapper");

  menuRepository.get().then((menuList) => {
    const dayMenuElement = menuList
      .map(
        (dayMenu) =>
          `<li>
            <div class="menu-date">
              <div class="day-of-week">${dateFormatter.getDayOfWeek(
                dayMenu.date
              )}</div>
              <div class="month-and-day">${dateFormatter.getMonthAndDay(
                dayMenu.date
              )}</div>
            </div>
            <div class="menu-meals">
                <div class="menu-meal">🌞
                    <a href="${dayMenu.lunch.link}">${dayMenu.lunch.title}</a>
                </div>
                <div class="menu-meal">🌙
                    <a href="${dayMenu.dinner.link}">${dayMenu.dinner.title}</a>
                </div>
            </div>
        </li>`
      )
      .join("");

    targetElement.innerHTML = `<input type="button" class="btn-default" value="Add your menu">
                <ul class="menu-list">${dayMenuElement}</ul>`;

    const buttonElement = document.querySelector("input");
    buttonElement.addEventListener("click", addWeekMenu.render);
  });
}
