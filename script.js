const slides = [...document.querySelectorAll(".slide")];
const dots = [...document.querySelectorAll(".dot")];

let current = 0;

function showSlide(index) {
    current = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === current);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === current);
    });

    if (current === 2) {
        burst();
    }
}


/* NEXT BUTTONS */

document.querySelectorAll(".next").forEach(button => {

    button.addEventListener("click", () => {
        showSlide(current + 1);
    });

});


/* RESTART */

document.querySelector(".restart").addEventListener("click", () => {
    showSlide(0);
});


/* SWIPE ON MOBILE */

let touchStartX = 0;

document.addEventListener(
    "touchstart",
    event => {
        touchStartX = event.changedTouches[0].screenX;
    },
    { passive: true }
);

document.addEventListener(
    "touchend",
    event => {

        const touchEndX = event.changedTouches[0].screenX;

        const difference = touchEndX - touchStartX;

        if (Math.abs(difference) > 55) {

            if (difference < 0) {
                showSlide(current + 1);
            } else {
                showSlide(current - 1);
            }

        }

    },
    { passive: true }
);


/* KEYBOARD */

document.addEventListener("keydown", event => {

    if (event.key === "ArrowRight") {
        showSlide(current + 1);
    }

    if (event.key === "ArrowLeft") {
        showSlide(current - 1);
    }

});


/* MUSIC */

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", async () => {

    try {

        if (music.paused) {

            await music.play();

            musicBtn.textContent =
                "⏸ Pause Birthday Music";

        } else {

            music.pause();

            musicBtn.textContent =
                "🎵 Play Birthday Music";

        }

    } catch (error) {

        musicBtn.textContent =
            "🎵 Tap Again — Music Not Started";

    }

});


/* FLOATING HEARTS */

const holder = document.getElementById("bgHearts");

const symbols = [
    "♡",
    "♥",
    "💗",
    "💖",
    "✦",
    "✨"
];


function floatingHeart() {

    const heart = document.createElement("span");

    heart.className = "float-heart";

    heart.textContent =
        symbols[
            Math.floor(
                Math.random() * symbols.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        14 + Math.random() * 20 + "px";

    heart.style.animationDuration =
        6 + Math.random() * 6 + "s";

    holder.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 13000);
}


setInterval(floatingHeart, 650);


/* HEART BURST */

function burst() {

    for (let i = 0; i < 22; i++) {

        const heart =
            document.createElement("span");

        heart.className = "float-heart";

        heart.textContent =
            ["♡", "♥", "💗", "✨"][
                Math.floor(
                    Math.random() * 4
                )
            ];

        heart.style.left =
            40 + Math.random() * 20 + "vw";

        heart.style.bottom =
            35 + Math.random() * 10 + "vh";

        heart.style.fontSize =
            16 + Math.random() * 22 + "px";

        heart.style.animationDuration =
            2 + Math.random() * 2 + "s";

        holder.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

        }
