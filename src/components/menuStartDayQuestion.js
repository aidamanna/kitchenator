import Calendar from '../assets/images/calendar.svg'
import * as menuQuestion from './menuQuestion';

export function html(position) {
    const title = 'Pick menu start date';
    const inputs = [`<img class="input-big-icon" src="${Calendar}">
                    <input type="date" placeholder="YYYY-MM-DD"/>`];

    return menuQuestion.html(position, title, inputs);
}
