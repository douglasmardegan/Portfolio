let arrayIds = [];
let ids = document.getElementsByClassName("grid-item");
for (let i = 0; i < ids.length; i++) {
  arrayIds.push(ids[i].id);
}

document
  .querySelector("#generateContentButton")
  .addEventListener("click", () => {
    /* Função para sortear um número aleatório entre 0 e 99 */
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    for (let i = 0; i < arrayIds.length; i++) {
      document.getElementById(arrayIds[i]).innerHTML = `${getRandomInt(0, 99)}`;
    }
  });

document.querySelector("#clearContentButton").addEventListener("click", () => {
  for (let i = 0; i < arrayIds.length; i++) {
    document.getElementById(arrayIds[i]).innerHTML = "";
  }
});
