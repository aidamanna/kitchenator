const menuRecipeQuestion = require('./components/menuRecipeQuestion');
const menuStartDayQuestion = require('./components/menuStartDayQuestion');

function render() {
    const days = Array.from({length: 7}, (_, i) => i + 1);

    const menuRecipeQuestions = days
        .map(day => menuRecipeQuestion.html(day, `Day ${day} menu`))
        .join('');

    const modal = `<div class="modal-container">
        <div class="modal">
            <div class="modal-wrapper">
                ${menuStartDayQuestion.html(0)}
                ${menuRecipeQuestions} 
                <footer class="modal-footer">
                    <input type="button" id="back-button" value="Back" class="btn-default hidden"/>
                    <input type="button" id="next-button" value="Next" class="btn-default"/>
                    <input type="submit" id="submit-button" value="Submit" class="btn-default hidden"/>
                </footer>
            </div>
        </div>
    </div>`


    const targetElement = document.querySelector('.main');
    targetElement.insertAdjacentHTML("afterbegin", modal);

    let currentQuestionIndex = 0;
    const questions = document.querySelectorAll('.question');
    questions[currentQuestionIndex].classList.remove('hidden');

    const backButtonElement = document.querySelector('#back-button');
    const nextButtonElement = document.querySelector('#next-button');
    const submitButtonElement = document.querySelector('#submit-button');

    nextButtonElement.addEventListener('click', function() {
        questions[currentQuestionIndex].classList.add('hidden');

        if (currentQuestionIndex === 0) {
            backButtonElement.classList.remove('hidden');
        }

        currentQuestionIndex++;
        questions[currentQuestionIndex].classList.remove('hidden');

        if (currentQuestionIndex === questions.length - 1) {
            nextButtonElement.classList.add('hidden');
            submitButtonElement.classList.remove('hidden');
        }
    })

    backButtonElement.addEventListener('click', function() {
        questions[currentQuestionIndex].classList.add('hidden');

        if (currentQuestionIndex === questions.length - 1) {
            submitButtonElement.classList.add('hidden');
            nextButtonElement.classList.remove('hidden');
        }

        currentQuestionIndex--;
        questions[currentQuestionIndex].classList.remove('hidden');

        if (currentQuestionIndex === 0) {
            backButtonElement.classList.add('hidden');
        }
    })
}

module.exports = { render };
