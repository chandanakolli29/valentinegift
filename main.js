const noBtn = document.getElementById("noBtn");

if (noBtn) {
  const card = document.querySelector(".card");

  function moveNoButton() {
    const cardRect = card.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const padding = 12;
    const maxX = cardRect.width - btnRect.width - padding * 2;

    // Keep "No" near the buttons (not over the image)
    const minY = 330;
    const maxY = 390;

    const x = padding + Math.random() * Math.max(0, maxX);
    const y = minY + Math.random() * (maxY - minY);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  }

  noBtn.addEventListener("mouseenter", moveNoButton);
  noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton();
  }, { passive: false });

  setTimeout(moveNoButton, 600);
}
