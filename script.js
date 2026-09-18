// 🎂 SHAMAMA MY CHURAIL — BIRTHDAY COUNTDOWN

// 19 September 2026 — 12:00 AM Pakistan Time
const birthdayTime = new Date("2026-09-18T19:00:00Z").getTime();

const countdown = document.getElementById("countdown");
const birthdayScreen = document.getElementById("birthday-screen");

function updateCountdown() {
    const now = new Date().getTime();
    const difference = birthdayTime - now;

    // 🎉 Birthday time reached
    if (difference <= 0) {
        showBirthday();
        return;
    }

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) /
        1000
    );

    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    if (hoursElement) {
        hoursElement.textContent = String(hours).padStart(2, "0");
    }

    if (minutesElement) {
        minutesElement.textContent = String(minutes).padStart(2, "0");
    }

    if (secondsElement) {
        secondsElement.textContent = String(seconds).padStart(2, "0");
    }
}

// 💖 Show birthday message
function showBirthday() {

    const countdownScreen =
        document.getElementById("countdown-screen");

    if (countdownScreen) {
        countdownScreen.style.display = "none";
    }

    if (birthdayScreen) {
        birthdayScreen.style.display = "flex";
        birthdayScreen.classList.add("show");
    }

    createHearts();
}

// 💕 Floating hearts
function createHearts() {

    const hearts = ["♡", "♥", "💕", "💗", "💖", "✨"];

    for (let i = 0; i < 30; i++) {

        const heart = document.createElement("div");

        heart.className = "floating-heart";

        heart.textContent =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.animationDelay =
            Math.random() * 4 + "s";

        heart.style.animationDuration =
            5 + Math.random() * 5 + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);
    }
}

// 🚀 Start countdown
updateCountdown();

setInterval(updateCountdown, 1000);
