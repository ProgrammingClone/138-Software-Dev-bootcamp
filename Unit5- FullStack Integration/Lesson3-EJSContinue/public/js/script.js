document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const recipeCards = document.querySelectorAll(".recipe-card");
  const noResults = document.getElementById("noResults");

  if (!searchInput || recipeCards.length === 0) {
    return;
  }

  function filterRecipes() {
    const query = searchInput.value.trim().toLowerCase();
    let anyVisible = false;

    recipeCards.forEach((card) => {
      const text = card.innerText.toLowerCase();
      const visible = !query || text.includes(query);
      card.hidden = !visible;
      anyVisible = anyVisible || visible;
    });

    noResults.hidden = anyVisible;
  }

  searchInput.addEventListener("input", filterRecipes);
  filterRecipes();
});
