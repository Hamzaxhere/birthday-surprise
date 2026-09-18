// ========================================
// BIRTHDAY COUNTDOWN
// Pakistan Time (UTC+5)
// ========================================

const birthdayDate = new Date("2026-09-19T00:00:00+05:00");

const countdownScreen = document.getElementById("countdown-screen");
const birthdayScreen = document.getElementById("birthday-screen");

const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");


// Update countdown
function updateCountdown() {

    const now = new Date();
    const difference = birthdayDate - now;

    // Birthday time reached
    if (difference <= 0) {
        revealBirthday();
        return;
    }

    const totalSeconds = Math.floor(difference / 1000);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");
}


// Reveal birthday
function revealBirthday() {

    countdownScreen.classList.add("hidden");

    setTimeout(() => {
        birthdayScreen.classList.add("show");
    }, 1200);

}


// Start countdown
updateCountdown();

setInterval(updateCountdown, 1000);
