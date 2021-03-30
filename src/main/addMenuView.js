function render() {
    const addMenuModal = `<div class="modal-container">
        <div class="modal">
            <div class="modal-wrapper">
                <header class="modal-header">
                    <h2> Add new menu </h2>
                    <span class="close">&times;</span>
                  </header>
                  <form class="modal-content" >
                    <input type="text" placeholder="Day"/>
                    <input type="text" placeholder="Lunch"/>
                    <input type="text" placeholder="Dinner"/>
                  </form>
                  <footer class="modal-footer">
                    <input type="button" value="Cancel" class="btn-default"/>
                    <input type="submit" value="Add" class="btn-default btn-align-right"/>
                  </footer>
            </div>
        </div>
    </div>`

    const targetElement = document.querySelector('.main');
    targetElement.innerHTML = addMenuModal; //add instead of replace
}

module.exports = { render };
