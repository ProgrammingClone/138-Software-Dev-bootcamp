const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll(".product-card");

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase().trim();
    productCards.forEach((card) => {
      const name = card.querySelector(".card-title").textContent.toLowerCase();
      const description = card
        .querySelector(".card-text")
        .textContent.toLowerCase();
      const match = name.includes(query) || description.includes(query);
      card.style.display = match ? "block" : "none";
    });
  });
}
