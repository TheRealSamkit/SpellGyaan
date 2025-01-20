import { fetchRandomWord } from "/api.js";
import { spellCheckerData, hardSpellCheckerData } from "./assets/constants.js";
let word = "";
let def = "";
let difficulty = "";

const voices = [];

speechSynthesis.onvoiceschanged = () => {
  voices.push(...speechSynthesis.getVoices());
};

const elements = {
  initializer: document.getElementById("init"),
  diffCon: document.querySelector(".diffContainer"),
  diffButtons: document.querySelectorAll(".btnContainer"),
  container: document.querySelector(".container"),
  wordPlayer: document.getElementById("wordPlayer"),
  defPlayer: document.getElementById("defPlayer"),
  overlay: document.getElementById("overlay"),
  userInput: document.getElementById("userInput"),
  submitBtn: document.getElementById("submit"),
  messageBox: document.getElementById("message"),
  resetBtn: document.getElementById("resetBtn"),
};

document.addEventListener("DOMContentLoaded", init);

function init() {
  elements.initializer.addEventListener("click", startScreen);
  elements.submitBtn.addEventListener("click", checkAnswer);
  elements.resetBtn.addEventListener("click", resetGame);
  elements.wordPlayer.addEventListener("click", function () {
    speak(this, word);
  });
  elements.defPlayer.addEventListener("click", function () {
    speak(this, def);
  });
  elements.diffButtons.forEach((button) =>
    button.addEventListener("click", (e) => startGame(e.target.dataset.mode))
  );
}

function startScreen() {
  toggleVisibility(elements.initializer);
  toggleVisibility(elements.diffCon);
}

function startGame(mode) {
  toggleVisibility(elements.diffCon);
  toggleVisibility(elements.container);
  difficulty = mode;
  pickWord();
}

async function fetchWordandDef() {
  toggleVisibility(elements.overlay);
  try {
    const { randomWord, definition } = await fetchRandomWord();
    if (!definition) {
      throw new Error("No definition found");
    }
    word = randomWord;
    def = definition;
  } catch (error) {
    console.error("Error fetching word and definition:", error);
    fetchWordandDef();
  } finally {
    toggleVisibility(elements.overlay);
  }
}
function speak(elem, toSpeak) {
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
    elem.innerHTML = "▶";
    return;
  }
  elem.innerHTML = `<i class="fa-solid fa-pause"></i>`;

  const utterance = new SpeechSynthesisUtterance(toSpeak);
  if (voices.length > 0) {
    utterance.voice = voices.find((v) => v.lang.startsWith("en")) || voices[0]; // Fallback to first voice
  }

  utterance.onend = () => {
    elem.innerHTML = "▶";
  };

  speechSynthesis.speak(utterance);
}

function toggleVisibility(element) {
  element.classList.toggle("hide");
}

function checkAnswer() {
  const answer = elements.userInput.value.toLowerCase();
  if (answer === word) {
    elements.messageBox.textContent = "Result: Correct!";
    elements.resetBtn.textContent = "New Game?";
  } else {
    elements.messageBox.textContent = "Result: Incorrect. Try again.";
  }
  elements.userInput.value = "";
}

function resetGame() {
  elements.messageBox.textContent = "Result: -----------------";
  word = "";
  def = "";
  pickWord();
  elements.resetBtn.textContent = "Reset Game";
}

function pickWord() {
  if (difficulty === "easy") {
    const idx = getRandomInt(spellCheckerData.length);
    word = spellCheckerData[idx].word;
    def = spellCheckerData[idx].hint;
  } else if (difficulty === "medium") {
    const idx = getRandomInt(hardSpellCheckerData.length);
    word = hardSpellCheckerData[idx].word; // Corrected reference
    def = hardSpellCheckerData[idx].hint;
  } else {
    fetchWordandDef();
  }
  console.log("Word:", word, "Definition:", def);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
