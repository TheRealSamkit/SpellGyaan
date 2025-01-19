import { fetchRandomWord } from "/api.js";

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
}

function speak() {
  // Create a SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance("Potato");

  // Select a voice
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[1]; // Choose a specific voice

  // Speak the text
  speechSynthesis.speak(utterance);
}

speak();

function toggleVisibility(element, toggle) {
  element.classList.toggle("hide");
}
