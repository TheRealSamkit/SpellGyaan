import { fetchRandomWord } from "/api.js";

let word = "";
let definition = "";

const elements = {
  initializer: document.getElementById("init"),
  diffCon: document.querySelector(".diffContainer"),
  diffButtons: document.querySelectorAll(".btnContainer"),
  container: document.querySelector(".container"),
  wordPlayer: document.getElementById("wordPlayer"),
  defPlayer: document.getElementById("defPlayer"),
  overlay: document.getElementById("overlay"),
};

document.addEventListener("DOMContentLoaded", init);

function init() {
  elements.initializer.addEventListener("click", startScreen);
  elements.diffButtons.forEach((button) =>
    button.addEventListener("click", (e) => startGame(e.target.dataset.mode))
  );
  elements.wordPlayer.addEventListener("click", () => speak(this, word));
  elements.defPlayer.addEventListener("click", () => speak(this, definition));
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
  toggleVisibility(elements.overlay, "remove");
  await fetchRandomWord()
    .then(({ randomWord, def }) => {
      console.log("Random word:", randomWord, "Definition:", def);
      word = randomWord;
      definition = def;
      console.log("Definition:", def);
      if (def === undefined) {
        console.log("No definition found. Trying again...");
      }
      toggleVisibility(elements.overlay, "add");
    })
    .catch((error) => {
      console.error("Error fetching word and definition:", error);
      fetchWordandDef();
    });
}

function speak(elem, toSpeak) {
  console.log(toSpeak);
  const utterance = new SpeechSynthesisUtterance(toSpeak);
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[1];
  speechSynthesis.speak(utterance);
}

function toggleVisibility(element, toggle) {
  element.classList.toggle("hide");
}
