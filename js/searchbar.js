const searchBar = document.querySelector(".searchbar");

searchBar.addEventListener("input", (e) => {
  const query = searchBar.value.trim().toLowerCase();

  // Loop through all the games in the container and show/hide them depending on whether they match the search query
  for (let game of gamesContainer.children) {
    if (game instanceof Element) {
      if (query) {
        const gameName = game
          .querySelector("span")
          .innerText.trim()
          .toLowerCase();
        if (gameName.includes(query)) {
          game.classList.remove("hidden");
        } else {
          game.classList.add("hidden");
        }
      } else {
        game.classList.remove("hidden");
      }
    }
  }
});