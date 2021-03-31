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
                    <footer class="modal-footer">
                        <input type="button" value="Next" class="btn-default"/>
                    </footer>
                </div>
                <div class="question" id="question2" style="display:none">
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
                    <footer class="modal-footer">
                        <input type="button" value="Back" class="btn-default"/>
                        <input type="button" value="Next" class="btn-default"/>
                    </footer>
                </div>
            </div>
        </div>
    </div>`

    const targetElement = document.querySelector('.main');
    targetElement.insertAdjacentHTML("afterbegin", modal);
}

module.exports = { render };
