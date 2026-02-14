const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const questionCard = document.getElementById("questionCard");
const celebrationCard = document.getElementById("celebrationCard");
const confettiContainer = document.getElementById("confettiContainer");


yesBtn.addEventListener("click", () => {
    questionCard.classList.add("hidden");
    celebrationCard.classList.remove("hidden");
    createConfetti();
});


noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveNoButton();
});

function moveNoButton() {
    noBtn.style.position = "fixed";
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

function createConfetti() {
    const colors = ["#ff69b4", "#ff1493", "#ffc0cb", "#ffffff", "#ff85c1"];
    const count = 150;

    for (let i = 0; i < count; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        const size = Math.random() * 8 + 5;
        const left = Math.random() * 100;
        const duration = Math.random() * 3 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];

        confetti.style.left = left + "vw";
        confetti.style.width = size + "px";
        confetti.style.height = size + "px";
        confetti.style.backgroundColor = color;
        confetti.style.animationDuration = duration + "s";

        if (Math.random() > 0.5) {
            confetti.style.borderRadius = "50%";
        }

        confettiContainer.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);
    }
}
