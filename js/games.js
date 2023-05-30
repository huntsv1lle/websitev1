
// https://raw.githack.com/huntsv1lle/assets/main/json/games.json
fetch("/json/games.json")
.then((response) => response.json())
.then((games) => {
    games.forEach((game) => {
        const gameEl = document.createElement('div');
        gameEl.className = "game";
        gameEl.innerHTML = `<img src="${"https://raw.githack.com/huntsv1lle/assets/main/" + game.root + "/" + game.img}" />`;
        document.body.appendChild(gameEl);
    });
});

