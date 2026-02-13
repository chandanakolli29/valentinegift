const noBtn = document.getElementById("noBtn");
const card = document.querySelector(".card");

if (noBtn && card) {
  // make sure it starts normal (visible)
  noBtn.style.position = "relative";
  noBtn.style.left = "auto";
  noBtn.style.top = "auto";

  function moveNoButton() {
    const cardRect = card.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const padding = 16;

    const maxX = cardRect.width - btnRect.width - padding * 2;
    const maxY = cardRect.height - btnRect.height - padding * 2;

    const x = padding + Math.random() * Math.max(0, maxX);
    const y = padding + Math.random() * Math.max(0, maxY);

    // Now allow absolute positioning BUT safely inside the card
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    noBtn.style.zIndex = "9999";
  }

  // Hover (desktop)
  noBtn.addEventListener("mouseenter", moveNoButton);

  // Tap (mobile)
  noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton();
  }, { passive: false });
}
