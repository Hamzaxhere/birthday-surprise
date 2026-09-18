let currentSlide = 0;

const slides = document.querySelectorAll(".slide");

const dots = [
    document.getElementById("dot1"),
    document.getElementById("dot2"),
    document.getElementById("dot3")
];


/* SHOW SLIDE */

function showSlide(number) {

    if (number < 0) {
        number = slides.length - 1;
    }

    if (number >= slides.length) {
        number = 0;
    }

    currentSlide = number;


    slides.forEach(function(slide, index) {

        if (index === currentSlide) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }

    });


    dots.forEach(function(dot, index) {

        if (index === currentSlide) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }

    });


    if (currentSlide === 2) {
        heartBurst();
    }

}


/* NEXT */

function nextSlide() {

    showSlide(currentSlide + 1);

}


/* HOME */

function goHome() {

    showSlide(0);

}


/* MUSIC */

function playMusic() {

    const music =
        document.getElementById("birthdayMusic");

    const button =
        document.getElementById("musicButton");


    if (music.paused) {

        music.play()
            .then(function() {

                button.innerHTML =
                    "⏸ Pause Birthday Music";

            })
            .catch(function() {

                button.innerHTML =
                    "🎵 Tap Again";

            });

    } else {

        music.pause();

        button.innerHTML =
            "🎵 Play Birthday Music";

    }

}


/* FLOATING HEARTS */

const heartContainer =
    document.getElementById("hearts");


const symbols = [
    "♡",
    "♥",
    "💗",
    "💖",
    "✨",
    "✦"
];


function createHeart() {

    const heart =
        document.createElement("span");


    heart.className = "heart";


    heart.innerHTML =
        symbols[
            Math.floor(
                Math.random() * symbols.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (14 + Math.random() * 22) + "px";


    heart.style.animationDuration =
        (6 + Math.random() * 6) + "s";


    heartContainer.appendChild(heart);


    setTimeout(function() {

        heart.remove();

    }, 13000);

}


setInterval(createHeart, 700);


/* HEART BURST */

function heartBurst() {

    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("span");


        heart.className = "heart";


        heart.innerHTML =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];


        heart.style.left =
            (40 + Math.random() * 20) + "vw";


        heart.style.bottom =
            (30 + Math.random() * 20) + "vh";


        heart.style.fontSize =
            (16 + Math.random() * 24) + "px";


        heart.style.animationDuration =
            (2 + Math.random() * 2) + "s";


        heartContainer.appendChild(heart);


        setTimeout(function() {

            heart.remove();

        }, 5000);

    }

}


/* SWIPE SUPPORT */

let startX = 0;


document.addEventListener(
    "touchstart",
    function(event) {

        startX =
            event.touches[0].clientX;

    },
    { passive: true }
);


document.addEventListener(
    "touchend",
    function(event) {

        const endX =
            event.changedTouches[0].clientX;

        const difference =
            endX - startX;


        if (Math.abs(difference) > 60) {

            if (difference < 0) {
                nextSlide();
            } else {
                showSlide(currentSlide - 1);
            }

        }

    },
    { passive: true }
);


/* KEYBOARD */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "ArrowRight") {
            nextSlide();
        }

        if (event.key === "ArrowLeft") {
            showSlide(currentSlide - 1);
        }

    }
);


/* START */

showSlide(0);
