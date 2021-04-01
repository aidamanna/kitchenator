function html(position, title, inputs) {
    return `<div class="question hidden" id="question${position}">
                <header class="modal-header">
                    <h2>${title}</h2>
                    <span class="close">&times;</span>
                </header>
                <div class="modal-content" >
                    ${
                        inputs
                        .map(input => `<div class="form-element">${input}</div>`)
                        .join('')
                    }
                </div>
            </div>`
}

module.exports = { html };
