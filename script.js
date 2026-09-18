// ==========================================
// 🎂 SHAMAMA MY CHURAIL — BIRTHDAY SURPRISE
// ==========================================

// Pakistan midnight:
// 19 September 2026 12:00 AM PKT
// PKT = UTC+5
const birthdayTime = new Date("2026-09-18T19:00:00Z").getTime();

const countdown = document.getElementById("countdown");
const surprise = document.getElementById("surprise");
const secretMessage = document.getElementById("secret-message");

// ------------------------------------------
// COUNTDOWN
// ------------------------------------------

function updateCountdown() {
    const now = new Date().getTime();
    const difference = birthdayTime - now;

    // Midnight reached
    if (difference <= 0) {
        showSurprise();
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
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

    // If your HTML has these IDs
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    if (daysElement) daysElement.textContent = String(days).padStart(2, "0");
    if (hoursElement) hoursElement.textContent = String(hours).padStart(2, "0");
    if (minutesElement) minutesElement.textContent = String(minutes).padStart(2, "0");
    if (secondsElement) secondsElement.textContent = String(seconds).padStart(2, "0");
}

// ------------------------------------------
// MIDNIGHT SURPRISE
// ------------------------------------------

function showSurprise() {
    if (countdown) {
        countdown.style.display = "none";
    }

    if (surprise) {
        surprise.style.display = "block";
        surprise.classList.add("show");
    }

    if (secretMessage) {
        secretMessage.style.display = "block";
    }

    createHearts();
}

// ------------------------------------------
// FLOATING HEARTS
// ------------------------------------------

function createHearts() {
    const hearts = ["♡", "♥", "💕", "💗", "💖"];

    for (let i = 0; i < 25; i++) {
        const heart = document.createElement("div");

        heart.className = "floating-heart";
        heart.textContent =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDelay = Math.random() * 5 + "s";
        heart.style.animationDuration =
            5 + Math.random() * 5 + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);
    }
}

// ------------------------------------------
// START
// ------------------------------------------

updateCountdown();

setInterval(updateCountdown, 1000);
