import * as menuRespository from './menuRepository';

const mainElement = document.querySelector('.main-wrapper');


const menuItemsElement = menuRespository.get().map( dailyMenu  => 
    `<li>
    <div class="weekly-meny-day">${dailyMenu.day}<div>
    <div class="weekly-menu-meal">Lunch: 
        <a href="${dailyMenu.lunch.link}">${dailyMenu.lunch.title}</a>
    </div>
    <div class="weekly-menu-meal">Dinner: 
        <a href="${dailyMenu.dinner.link}">${dailyMenu.dinner.title}</a>
    </div>
    </li>`).join('');


const menuListElement = document.createElement('ul');
menuListElement.classList.add("weekly-menu-list")
menuListElement.innerHTML = menuItemsElement;


console.log(menuListElement);

mainElement.appendChild(menuListElement);