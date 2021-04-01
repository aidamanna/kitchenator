const menuQuestion = require('./menuQuestion');

function html(position, title) {
    const inputs = [`<img class="input-icon" src="sun.svg">
                    <div>
                        <input type="text" class="form-subelement" placeholder="Lunch recipe"/>    
                        <input type="text" class="form-subelement" placeholder="Lunch recipe link"/>                            
                    </div>`,
                    `<img class="input-icon" src="moon.svg">
                    <div>
                        <input type="text" class="form-subelement" placeholder="Dinner recipe"/>
                        <input type="text" class="form-subelement" placeholder="Dinner recipe link"/>
                    </div>`];

    return menuQuestion.html(position, title, inputs);
}

module.exports = { html };
