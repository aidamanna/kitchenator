import * as addWeekMenu from "../add-week-menu/popup";
import * as dateFormatter from "../../dateFormatter";
import * as menuRepository from "../../menuRepository";

export function render() {
  const targetElement = document.querySelector(".main-wrapper");

  const dayMenuElement = menuRepository
    .get()
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
            <div>
                <div class="menu-meal">🌞 
                    <a href="${dayMenu.lunch.link}">${
          dayMenu.lunch.title
        }</a>
                </div>
                <div class="menu-meal">🌙  
                    <a href="${dayMenu.dinner.link}">${
          dayMenu.dinner.title
        }</a>
                </div>
            </div>
        </li>`
    )
    .join("");

  const menuListElement = `<input type="button" class="btn-default" value="Add your menu">
                <ul class="menu-list">${dayMenuElement}</ul>`;

  targetElement.innerHTML = menuListElement;

  const buttonElement = document.querySelector("input");
  buttonElement.addEventListener("click", addWeekMenu.render);
}