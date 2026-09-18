// 🎂 TEST VERSION
// Birthday reveal appears immediately

const countdownScreen =
    document.getElementById("countdown-screen");

const birthdayScreen =
    document.getElementById("birthday-screen");

const music =
    document.getElementById("birthday-music");

const musicButton =
    document.getElementById("music-btn");


// ================================
// SHOW BIRTHDAY IMMEDIATELY
// ================================

function showBirthday() {

    if (countdownScreen) {
        countdownScreen.style.display = "none";
    }

    if (birthdayScreen) {
        birthdayScreen.style.display = "flex";
        birthdayScreen.classList.add("show");
    }

    createHearts();
}


// ================================
// MUSIC BUTTON
// ================================

if (musicButton && music) {

    musicButton.addEventListener("click", function () {

        if (music.paused) {

            music.play();

            musicButton.innerHTML =
                "⏸️ Pause Birthday Music";

        } else {

            music.pause();

            musicButton.innerHTML =
                "🎵 Play Birthday Music";
        }

    });

}


// ================================
// FLOATING HEARTS
// ================================

function createHearts() {

    const hearts = [
        "♡",
        "♥",
        "💕",
        "💗",
        "💖",
        "✨"
    ];

    for (let i = 0; i < 30; i++) {

        const heart =
            document.createElement("div");

        heart.className =
            "floating-heart";

        heart.textContent =
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.animationDelay =
            Math.random() * 4 + "s";

        heart.style.animationDuration =
            5 + Math.random() * 5 + "s";

        document.body.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 10000);
    }
}


// ================================
// START TEST
// ================================

showBirthday();
