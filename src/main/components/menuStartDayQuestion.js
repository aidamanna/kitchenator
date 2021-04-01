const menuQuestion = require('./menuQuestion');

function html(position) {
    const title = 'Pick menu start date';
    const inputs = [`<img class="input-big-icon" src="calendar.svg">
                    <input type="date" placeholder="YYYY-MM-DD"/>`];

    return menuQuestion.html(position, title, inputs);
}

module.exports = { html };
