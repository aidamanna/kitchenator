import Moon from "../assets/images/moon.svg";
import Sun from "../assets/images/sun.svg";
import * as menuQuestion from "./menuQuestion";

export function html(position, title) {
  const inputs = [
    `<img class="input-icon" src="${Sun}">
                    <div>
                        <input type="text" class="form-subelement" placeholder="Lunch recipe title"/>    
                        <input type="text" class="form-subelement" placeholder="Lunch recipe link"/>                            
                    </div>`,
    `<img class="input-icon" src="${Moon}">
                    <div>
                        <input type="text" class="form-subelement" placeholder="Dinner recipe"/>
                        <input type="text" class="form-subelement" placeholder="Dinner recipe link"/>
                    </div>`,
  ];

  return menuQuestion.html(position, title, inputs);
}
