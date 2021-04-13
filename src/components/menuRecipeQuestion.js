import Moon from "../assets/images/moon.svg";
import Sun from "../assets/images/sun.svg";
import * as menuQuestion from "./menuQuestion";

export function html(title) {
  const inputs = [
    `<img class="input-icon" src="${Sun}">
                    <div>
                        <input type="text" class="form-subelement" name="lunch-title" id="lunch-title" placeholder="Lunch recipe title"/>    
                        <input type="text" class="form-subelement" name="lunch-link" id="lunch-link" placeholder="Lunch recipe link"/>                            
                    </div>`,
    `<img class="input-icon" src="${Moon}">
                    <div>
                        <input type="text" class="form-subelement" name="dinner-title" id="dinner-title" placeholder="Dinner recipe"/>
                        <input type="text" class="form-subelement" name="dinner-link" id="dinner-link" placeholder="Dinner recipe link"/>
                    </div>`,
  ];

  return menuQuestion.html(title, inputs, `menu-day`);
}
