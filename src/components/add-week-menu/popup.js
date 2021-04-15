import * as listMenus from "../list-menus/listMenus";
import * as menuRepository from "../../menuRepository";
import * as dayMenuQuestion from "./dayMenuQuestion";
import * as startDateQuestion from "./startDateQuestion";

export function render() {
  const days = Array.from({ length: 7 }, (_, i) => i + 1);

  const dayMenuQuestionsHtml = days
    .map((day) => dayMenuQuestion.html(`Day ${day} menu`))
    .join("");

  const modal = `<div class="modal-container">
        <div class="modal">
            <form id="add-menu-form" class="modal-wrapper">
                ${startDateQuestion.html()}
                ${dayMenuQuestionsHtml} 
                <footer class="modal-footer">
                    <input type="button" id="back-button" value="Back" class="btn-default hidden"/>
                    <input type="button" id="next-button" value="Next" class="btn-default"/>
                    <input type="submit" id="submit-button" value="Submit" class="btn-default hidden"/>
                </footer>
            </form>
        </div>
    </div>`;

  const targetElement = document.querySelector(".main");
  targetElement.insertAdjacentHTML("afterbegin", modal);

  let currentQuestionIndex = 0;
  const questions = document.querySelectorAll(".question");
  questions[currentQuestionIndex].classList.remove("hidden");

  const closeButtonElements = document.querySelectorAll(".close");
  const backButtonElement = document.querySelector("#back-button");
  const nextButtonElement = document.querySelector("#next-button");
  const submitButtonElement = document.querySelector("#submit-button");
  const formElement = document.querySelector("#add-menu-form");

  closeButtonElements.forEach((closeButtonElement) => {
    closeButtonElement.addEventListener("click", function () {
      document.querySelector(".modal-container").remove();
    });
  });

  nextButtonElement.addEventListener("click", function () {
    questions[currentQuestionIndex].classList.add("hidden");

    if (currentQuestionIndex === 0) {
      backButtonElement.classList.remove("hidden");
    }

    currentQuestionIndex++;
    questions[currentQuestionIndex].classList.remove("hidden");

    if (currentQuestionIndex === questions.length - 1) {
      nextButtonElement.classList.add("hidden");
      submitButtonElement.classList.remove("hidden");
    }
  });

  backButtonElement.addEventListener("click", function () {
    questions[currentQuestionIndex].classList.add("hidden");

    if (currentQuestionIndex === questions.length - 1) {
      submitButtonElement.classList.add("hidden");
      nextButtonElement.classList.remove("hidden");
    }

    currentQuestionIndex--;
    questions[currentQuestionIndex].classList.remove("hidden");

    if (currentQuestionIndex === 0) {
      backButtonElement.classList.add("hidden");
    }
  });

  formElement.addEventListener("submit", function (e) {
    e.preventDefault();
    document.querySelector(".modal-container").remove();

    const form = e.currentTarget;
    const menuStartDate = new Date(
      form.querySelector("#question-week-menu-start-day #date").value
    );

    form.querySelectorAll("#question-day-menu").forEach((question, i) => {
      const lunchTitle = question.querySelector("#lunch-recipe-title").value;
      const lunchLink = question.querySelector("#lunch-recipe-link").value;
      const dinnerTitle = question.querySelector("#dinner-recipe-title").value;
      const dinnerLink = question.querySelector("#dinner-recipe-link").value;

      const date = new Date(
        menuStartDate.getFullYear(),
        menuStartDate.getMonth(),
        menuStartDate.getDate() + i
      );

      menuRepository.saveDayMenu(
        date,
        lunchTitle,
        lunchLink,
        dinnerTitle,
        dinnerLink
      );
    });

    listMenus.render();
  });
}
