const text = document.querySelector('.demoDate');


function getChrono() {

    const now = new Date().getTime();
    const countdownDate = new Date('September 5, 2022').getTime();

    const distanceBase = countdownDate - now;

    const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distanceBase % (1000 * 60)) / 1000);

    // text.innerText = `J-${days} ${hours}h ${minutes}m ${seconds}s`;
    text.innerText = `J-${days}`;

}

const countDownInterval = setInterval(() => {

    getChrono();

}, 1000);