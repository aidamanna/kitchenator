function render() {
    const modal = `<div class="modal-container">
        <div class="modal">
            <div class="modal-wrapper">
                <div class="question" id="question1">
                    <header class="modal-header">
                        <h2>Pick menu start date</h2>
                        <span class="close">&times;</span>
                    </header>
                    <form class="modal-content" >
                        <div class="form-element">
                            <img class="input-big-icon" src="calendar.svg">
                            <input type="date" placeholder="YYYY-MM-DD"/>
                        </div>
                    </form>
                </div>
                <div class="question hidden" id="question2">
                    <header class="modal-header">
                        <h2>Day 1 menu</h2>
                        <span class="close">&times;</span>
                    </header>
                    <form class="modal-content" >
                        <div class="form-element">
                            <img class="input-icon" src="sun.svg">
                            <div>
                                <input type="text" class="form-subelement" placeholder="Lunch recipe"/>    
                                <input type="text" class="form-subelement" placeholder="Lunch recipe link"/>                            
                            </div>
                        </div>
                        <div class="form-element">
                            <img class="input-icon" src="moon.svg">
                            <div>
                                <input type="text" class="form-subelement" placeholder="Dinner recipe"/>
                                <input type="text" class="form-subelement" placeholder="Dinner recipe link"/>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="question hidden" id="question3">
                    <header class="modal-header">
                        <h2>Day 2 menu</h2>
                        <span class="close">&times;</span>
                    </header>
                    <form class="modal-content" >
                        <div class="form-element">
                            <img class="input-icon" src="sun.svg">
                            <div>
                                <input type="text" class="form-subelement" placeholder="Lunch recipe"/>    
                                <input type="text" class="form-subelement" placeholder="Lunch recipe link"/>                            
                            </div>
                        </div>
                        <div class="form-element">
                            <img class="input-icon" src="moon.svg">
                            <div>
                                <input type="text" class="form-subelement" placeholder="Dinner recipe"/>
                                <input type="text" class="form-subelement" placeholder="Dinner recipe link"/>
                            </div>
                        </div>
                    </form>
                    
                </div>
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
