import * as addWeekMenu from "./add-week-menu/popup";
import * as dateFormatter from "./dateFormatter";
import * as menuRepository from "./menuRepository";

export function render() {
  const targetElement = document.querySelector(".main-wrapper");

  const menuItemsElement = menuRepository
    .get()
    .map(
      (dailyMenu) =>
        `<li>
            <div class="menu-day">
              <div class="day-of-week">${dateFormatter.getDayOfWeek(
                dailyMenu.day
              )}</div>
              <div class="month-and-day">${dateFormatter.getMonthAndDay(
                dailyMenu.day
              )}</div>
            </div>
            <div>
                <div class="menu-meal">🌞 
                    <a href="${dailyMenu.lunch.link}">${
          dailyMenu.lunch.title
        }</a>
                </div>
                <div class="menu-meal">🌙  
                    <a href="${dailyMenu.dinner.link}">${
          dailyMenu.dinner.title
        }</a>
                </div>
            </div>
        </li>`
    )
    .join("");

  const menuListElement = `<input type="button" class="btn-default" value="Add your menu">
                <ul class="menu-list">${menuItemsElement}</ul>`;

  targetElement.innerHTML = menuListElement;

  const buttonElement = document.querySelector("input");
  buttonElement.addEventListener("click", addWeekMenu.render);
}
