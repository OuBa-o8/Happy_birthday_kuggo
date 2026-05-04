// ===== 開卡 =====
const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const main = document.getElementById("mainContent");

openBtn.addEventListener("click", () => {
  intro.classList.add("open");

  setTimeout(() => {
    intro.style.display = "none";
    main.classList.remove("hidden");
    main.classList.add("show");
  }, 1000);
});


// ===== 卡片淡入 =====
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.3 });

cards.forEach(card => observer.observe(card));


// ===== 彩花 =====
function createConfetti() {
  const container = document.querySelector(".confetti-container");

  const confetti = document.createElement("div");
  confetti.classList.add("confetti");

  confetti.style.left = Math.random() * 100 + "vw";

  const colors = ["#ff5050", "#ceab1f", "#32b8e8", "#5ad070"];
  confetti.style.background = colors[Math.floor(Math.random() * colors.length)];

  const size = Math.random() * 8 + 6;
  confetti.style.width = size + "px";
  confetti.style.height = size + "px";

  const duration = Math.random() * 4 + 3;
  confetti.style.animationDuration = duration + "s";

  container.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, duration * 1000);
}

setInterval(createConfetti, 400);