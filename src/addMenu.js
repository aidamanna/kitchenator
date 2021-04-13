import * as menuRecipeQuestion from "./components/menuRecipeQuestion";
import * as menuStartDayQuestion from "./components/menuStartDayQuestion";
import * as menuList from "./menuList";
import * as menuRepository from "./menuRepository";

export function render() {
  const days = Array.from({ length: 7 }, (_, i) => i + 1);

  const menuRecipeQuestions = days
    .map((day) => menuRecipeQuestion.html(day, `Day ${day} menu`))
    .join("");

  const modal = `<div class="modal-container">
        <div class="modal">
            <form id="add-menu-form" class="modal-wrapper">
                ${menuStartDayQuestion.html(0)}
                ${menuRecipeQuestions} 
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
    const menuStartDate = form.querySelector("#date").value;

    form.querySelectorAll(".question").forEach((question) => {
      if (question.id != "question0") {
        const lunchTitle = question.querySelector("#lunch-title").value;
        const lunchLink = question.querySelector("#lunch-link").value;
        const dinnerTitle = question.querySelector("#dinner-title").value;
        const dinnerLink = question.querySelector("#dinner-link").value;

        menuRepository.saveSingleMenu(
          menuStartDate,
          lunchTitle,
          lunchLink,
          dinnerTitle,
          dinnerLink
        );
      }
    });

    const mainElement = document.querySelector(".main-wrapper");
    menuList.render(mainElement);
  });
}
