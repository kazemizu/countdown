import _ from 'lodash';
import bootstrap from './js/bootstrap';

function component() {
    const element = document.createElement('div');
    element.id = 'demo';
    element.style = "font-family: 'Sofia Sans Condensed', sans-serif; font-size: 10em";

    // const countdown = new Countdown();

    // countdown.updateCountdown();

    return element;
}

bootstrap();
document.body.appendChild(component());