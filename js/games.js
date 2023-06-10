const gamesContainer = document.querySelector(".files");
const gameFrame = document.querySelector(".frame");
const gameContainer = document.querySelector(".gamecontainer");
const backButton = document.querySelector(".back");
const fullScrn = document.querySelector(".screen");
const navBar = document.querySelector(".topnav");
const search = document.querySelector(".searchbar");


// ---------------------------------------------------------------------------------------------------------------------------------------------
const cdn = fetch("/json/cdns.json");
// make game icons and clickable
fetch("/json/games.json")
  .then((response) => response.json())
  .then((games) => {
    games.forEach((game) => {
      const gameEl = document.createElement('div');
      gameEl.className = "file";
      gameEl.innerHTML = `<img src="${"https://rawcdn.githack.com/huntsv1lle/assets/ad5b9d7648bff52e29fc46fbae9563e19a877269/" + game.root + "/" + game.img}" /><span class="fileName">${game.name}</span>`;
      gamesContainer.appendChild(gameEl);

      gameEl.onclick = (e) => {
        gamesContainer.classList.add("hidden");
        navBar.classList.add("hidden");
        gameContainer.classList.remove("hidden");
        search.classList.add("hidden");

        gameFrame.querySelector(
          "iframe"
        ).src = `${"https://rawcdn.githack.com/huntsv1lle/assets/ad5b9d7648bff52e29fc46fbae9563e19a877269/" + game.root + "/" + game.file}`
      }
      backButton.value = `${"<" + game.name}`;
      backButton.onclick = (e) => {
        gamesContainer.classList.remove("hidden");
        gameContainer.classList.add("hidden");
        navBar.classList.remove("hidden");
        search.classList.remove("hidden");
        gameFrame.querySelector(
          "iframe"
        ).src = "";
      }
      const toggleFullscreen = () => {
        gameFrame.requestFullscreen();
      }
      fullScrn.addEventListener('click', toggleFullscreen)
    });
  });

