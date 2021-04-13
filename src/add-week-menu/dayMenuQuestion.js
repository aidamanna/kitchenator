import Moon from "../assets/images/moon.svg";
import Sun from "../assets/images/sun.svg";
import * as question from "./question";

export function html(title) {
  const inputs = [
    `<img class="input-icon" src="${Sun}">
                    <div>
                        <input type="text" class="form-subelement" name="lunch-recipe-title" id="lunch-recipe-title" placeholder="Lunch recipe title"/>    
                        <input type="text" class="form-subelement" name="lunch-recipe-link" id="lunch-recipe-link" placeholder="Lunch recipe link"/>                            
                    </div>`,
    `<img class="input-icon" src="${Moon}">
                    <div>
                        <input type="text" class="form-subelement" name="dinner-recipe-title" id="dinner-recipe-title" placeholder="Dinner recipe"/>
                        <input type="text" class="form-subelement" name="dinner-recipe-link" id="dinner-recipe-link" placeholder="Dinner recipe link"/>
                    </div>`,
  ];

  return question.html(title, inputs, `day-menu`);
}
