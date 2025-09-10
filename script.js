// Show modal popup
function showPopup() {
  const modal = document.getElementById("contactModal");
  modal.style.display = "block";

  // Auto close after 1 second
  setTimeout(() => {
    modal.style.display = "none";
  }, 2000);

  // Redirect to email
}

// Close modal when clicking X
function closeModal() {
  document.getElementById("contactModal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("contactModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Attach event to button
document.getElementById("contactBtn").addEventListener("click", showPopup);
document.querySelector(".close").addEventListener("click", closeModal);
// --- Projects filter functionality ---
document.addEventListener("DOMContentLoaded", () => {
  const filter = document.getElementById("teamFilter");
  const cards = document.querySelectorAll(".project-card");

  filter.addEventListener("change", () => {
    const selected = filter.value;

    cards.forEach((card) => {
      if (selected === "all" || card.dataset.member === selected) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});
