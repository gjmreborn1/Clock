const hoursHand = document.querySelector(".hand-hours");
const minutesHand = document.querySelector(".hand-minutes");
const secondsHand = document.querySelector(".hand-seconds");

function getAngle(currentValue, maxValue) {
    return (currentValue / maxValue) * 360 - 90;
}

function updateClock() {
    const now = new Date();

    hoursHand.style.transform = `rotate(${getAngle(now.getHours(), 12)}deg)`;
    minutesHand.style.transform = `rotate(${getAngle(now.getMinutes(), 60)}deg)`;
    secondsHand.style.transform = `rotate(${getAngle(now.getSeconds(), 60)}deg)`;
}

setInterval(updateClock, 1000);