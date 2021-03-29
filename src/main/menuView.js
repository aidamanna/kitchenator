const menuRespository = require('./menuRepository');


function render(targetElement) {
    const menuItemsElement = menuRespository.get().map( dailyMenu  => 
        `<li>
            <div class="menu-day">${dailyMenu.day}</div>
            <div class="menu-meals">
                <div class="menu-meal">🌞 
                    <a href="${dailyMenu.lunch.link}">${dailyMenu.lunch.title}</a>
                </div>
                <div class="menu-meal">🌙  
                    <a href="${dailyMenu.dinner.link}">${dailyMenu.dinner.title}</a>
                </div>
            </div>
        </li>`).join('');
    
    
    const menuListElement = document.createElement('ul');
    menuListElement.classList.add("weekly-menu-list")
    menuListElement.innerHTML = menuItemsElement;
        
    targetElement.appendChild(menuListElement);
}

module.exports = { render };