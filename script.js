import { fetchRandomWord } from "/api.js";

let word = "",
  definition = "";

const elements = {
  initializer: document.getElementById("init"),
  diffCon: document.querySelector(".diffContainer"),
  diffButtons: document.querySelectorAll(".btnContainer"),
  container: document.querySelector(".container"),
};

document.addEventListener("DOMContentLoaded", init);

function init() {
  elements.initializer.addEventListener("click", startScreen);
  elements.diffButtons.forEach((button) =>
    button.addEventListener("click", (e) => startGame(e.target.dataset.mode))
  );
}

function startScreen() {
  toggleVisibility(elements.initializer, "add");
  toggleVisibility(elements.diffCon, "remove");
}

function startGame(mode) {
  toggleVisibility(elements.diffCon, "add");
  toggleVisibility(elements.container, "remove");
  fetchWordandDef();
}

async function fetchWordandDef() {
  await fetchRandomWord()
    .then(({ randomWord, definition }) => {
      word = randomWord;
      definition = definition;
      console.log("Word:", word, "Definition:", definition);
    })
    .catch((error) => {
      console.error("Error fetching word and definition:", error);
      fetchWordandDef();
    });
}

function speak(toSpeak) {
  const utterance = new SpeechSynthesisUtterance(toSpeak);
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[1];
  speechSynthesis.speak(utterance);
}

function toggleVisibility(element, toggle) {
  element.classList.toggle("hide");
}
