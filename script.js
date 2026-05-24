const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

const imgManha = document.querySelector('#fundo_manha');
const imgTarde = document.querySelector('#fundo_tarde');
const imgNoite = document.querySelector('#fundo_noite');

const bodyPrincipal = document.querySelector('main');

const getTime = () => {
    const date = new Date();
    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    };
}

const clock = document.querySelector('.clock');

for (let i = 1; i <= 60; i++) {
    if (i % 5 === 0) {
        continue;
    }
    const tick = document.createElement('div');
    tick.classList.add('tick');
    tick.style.transform = `rotate(${i * 6}deg)`;
    clock.appendChild(tick);
}

setInterval(() => {
    const { hours, minutes, seconds } = getTime();

    secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`;
    minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`;
    hourHand.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`;

    if (hours >= 6 && hours < 12) {
        imgManha.classList.add('block');
        imgTarde.classList.remove('block');
        imgNoite.classList.remove('block');
        bodyPrincipal.setAttribute('class', 'tema-manha');
    } else if (hours >= 12 && hours < 18) {
        imgManha.classList.remove('block');
        imgTarde.classList.add('block');
        imgNoite.classList.remove('block');
        bodyPrincipal.setAttribute('class', 'tema-tarde');
    } else {
        imgManha.classList.remove('block');
        imgTarde.classList.remove('block');
        imgNoite.classList.add('block');
        bodyPrincipal.setAttribute('class', 'tema-noite');
    }
}, 1000);