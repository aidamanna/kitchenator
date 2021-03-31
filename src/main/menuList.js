const menuRespository = require('./menuRepository');
const addMenu = require('./addMenu');

function render(targetElement) {
    const menuItemsElement = menuRespository.get().map( dailyMenu  => 
        `<li>
            <div class="menu-day">${dailyMenu.day}</div>
            <div>
                <div class="menu-meal">🌞 
                    <a href="${dailyMenu.lunch.link}">${dailyMenu.lunch.title}</a>
                </div>
                <div class="menu-meal">🌙  
                    <a href="${dailyMenu.dinner.link}">${dailyMenu.dinner.title}</a>
                </div>
            </div>
        </li>`).join('');

    const menuListElement = `<input type="button" class="btn-default" value="Add your menu">
                <ul class="weekly-menu-list">${menuItemsElement}</ul>`

    targetElement.innerHTML = menuListElement;

    const buttonElement = document.querySelector('input');
    buttonElement.addEventListener('click', addMenu.render)
}

module.exports = { render };