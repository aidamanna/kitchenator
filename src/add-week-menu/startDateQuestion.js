import Calendar from "../assets/images/calendar.svg";
import * as question from "./question";

export function html() {
  const title = "Pick menu start date";
  const inputs = [
    `<img class="input-big-icon" src="${Calendar}">
     <input type="date" id="date" value="date" placeholder="YYYY-MM-DD"/>`,
  ];

  return question.html(title, inputs, "week-menu-start-day");
}
