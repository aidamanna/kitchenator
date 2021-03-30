function render() {
    const addMenuModal = `<div class="modal-container">
        <div class="modal">
            <div class="modal-wrapper">
                <header class="modal-header">
                    <h2> Add new menu </h2>
                    <span class="close">&times;</span>
                  </header>
                  <form class="modal-content" >
                    <div class="form-element">
                        <img class="input-icon" src="calendar.svg">
                            <input type="date" placeholder="YYYY-MM-DD"/>
                    </div>
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
                    <input type="button" value="Cancel" class="btn-default"/>
                    <input type="submit" value="Add" class="btn-default"/>
                  </footer>
            </div>
        </div>
    </div>`

    const targetElement = document.querySelector('.main');
    targetElement.innerHTML = addMenuModal; //add instead of replace
}

module.exports = { render };
