const noBtn = document.getElementById("noBtn");

if (noBtn) {
  const btnRow = document.getElementById("btnRow");

  function moveNoButton() {
    // Move within the card area
    const card = btnRow.closest(".card");
    const cardRect = card.getBoundingClientRect();

    const btnRect = noBtn.getBoundingClientRect();
    const padding = 16;

    const maxX = cardRect.width - btnRect.width - padding * 2;
    const maxY = 120; // keep it around the button area

    const x = padding + Math.random() * Math.max(0, maxX);
    const y = 320 + Math.random() * Math.max(0, maxY); // below image

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  }

  // Make it dodge cursor/taps
  noBtn.addEventListener("mouseenter", moveNoButton);
  noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton();
  }, { passive: false });

  // Optional: first move so it's playful immediately
  setTimeout(moveNoButton, 600);
}
