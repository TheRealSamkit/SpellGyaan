import { fetchRandomWord } from "./api.js";
import {
  spellCheckerData,
  hardSpellCheckerData,
  audioList,
} from "./assets/constants.js";
import { buttonAni, shakeContainer, streakAnimation } from "./animation.js";

let word = "",
  def = "",
  difficulty = "",
  falseGuess = 8,
  correctGuesses = 0,
  myScore = 0,
  guessStreak = 0,
  words = [],
  userGuesses = [],
  sound = false,
  pickedWord = [];

const { click, wrong, correct } = audioList;
const voices = [];

// Populate available voices for speech synthesis
speechSynthesis.onvoiceschanged = () => {
  voices.push(...speechSynthesis.getVoices());
};

// DOM Elements
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
  progressBar: document.getElementById("pro"),
  score: document.getElementById("score"),
  streak: document.querySelector(".streak-container"),
  pcount: document.querySelector(".count"),
  clsPopup: document.getElementById("closePopup"),
  popUp: document.getElementById("popup"),
  guessTable: document.getElementById("guessTable"),
};

document.addEventListener("DOMContentLoaded", init);

// Initialize event listeners and setup
function init() {
  elements.initializer.addEventListener("click", startScreen);
  elements.submitBtn.addEventListener("click", checkAnswer);
  elements.resetBtn.addEventListener("click", resetGame);
  elements.clsPopup.addEventListener("click", togglePopup);
  elements.wordPlayer.addEventListener("click", () =>
    speak(word, elements.wordPlayer)
  );
  elements.defPlayer.addEventListener("click", () =>
    speak(def, elements.defPlayer)
  );
  elements.diffButtons.forEach((btn) =>
    btn.addEventListener("click", (e) => startGame(e.target.dataset.mode))
  );
  setupSounds();
}

// Setup sound properties
function setupSounds() {
  correct.volume = 0.4;
  wrong.volume = 0.2;
  click.volume = 0.7;
  sound = true;
}

// Toggle visibility of elements
function toggleVisibility(element) {
  element.classList.toggle("hide");
}

// Speech synthesis functionality
function speak(text, element) {
  playSound(click, 0.153);
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
    element.textContent = "▶";
    return;
  }
  element.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = voices.find((v) => v.lang.startsWith("hi-IN")) || voices[0];
  utterance.onend = () => (element.textContent = "▶");
  speechSynthesis.speak(utterance);
}

// Start screen animations
function startScreen() {
  toggleVisibility(elements.initializer);
  toggleVisibility(elements.diffCon);
  buttonAni();
  playSound(click, 0.153);
}

// Start game based on difficulty
function startGame(mode) {
  toggleVisibility(elements.diffCon);
  toggleVisibility(elements.container);
  difficulty = mode;
  pickWord();
  playSound(click, 0.153);
}

// Fetch random word and definition
async function fetchWordandDef() {
  toggleVisibility(elements.overlay);
  try {
    const { randomWord, definition } = await fetchRandomWord();
    if (!definition) throw new Error("No definition found");
    word = randomWord;
    def = definition;
  } catch (error) {
    console.error("Error fetching word and definition:", error);
    await fetchWordandDef();
  } finally {
    toggleVisibility(elements.overlay);
  }
}

// Pick word based on difficulty
function pickWord() {
  const data = difficulty === "easy" ? spellCheckerData : hardSpellCheckerData;

  if (difficulty === "easy" && pickedWord.length > 49) {
    (difficulty = "medium"), pickWord();
  } else if (
    (difficulty === "medium" || pickedWord.length > 47) &&
    pickedWord.length > 97
  ) {
    (difficulty = "hard"), pickWord();
  }
  if (difficulty === "hard") return fetchWordandDef();
  const { word: selectedWord, hint } = data[getRandomInt(data.length)];
  word = selectedWord;
  def = hint;
  if (pickedWord.includes(word)) {
    pickWord();
    return;
  }
  pickedWord.unshift(word);
}

// Generate random index
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Check user answer
function checkAnswer() {
  playSound(click, 0.153);
  const answer = sanitizeAns(elements.userInput.value.trim().toLowerCase());
  if (!answer) return alert("Please type a word!");

  words.push(word);
  userGuesses.push(answer);
  console.log(words, userGuesses);
  if (answer === word) {
    elements.messageBox.textContent = "Result: Correct!";
    correctGuesses++;
    guessStreak++;
    myScore += correctGuesses * 50;
    updateScore(true);
    playSound(correct, 0.3);
    pickWord();
  } else {
    elements.messageBox.textContent = "Result: Incorrect. Try again.";
    falseGuess--;
    myScore = Math.max(0, myScore - 20);
    guessStreak = 0;
    shakeContainer();
    playSound(wrong, 2);
    updateScore(true);
  }

  elements.progressBar.value = falseGuess;
  elements.userInput.value = "";

  if (falseGuess === 0) endGame();
}

// End game logic
function endGame() {
  elements.messageBox.textContent = "Game Over!";
  elements.resetBtn.textContent = "Play Again";
  elements.userInput.disabled = true;
  elements.submitBtn.disabled = true;
  updateTable();
}

// Reset the game
function resetGame() {
  word = def = "";
  words = [];
  userGuesses = [];
  falseGuess = 8;
  correctGuesses = 0;
  guessStreak = 0;
  myScore = 0;
  elements.messageBox.textContent = "Result: -----------------";
  elements.resetBtn.textContent = "Reset Game";
  elements.userInput.disabled = false;
  elements.submitBtn.disabled = false;
  elements.progressBar.value = falseGuess;
  pickWord();
  playSound(click, 0.153);
}

// Update score and streak
function updateScore(isCorrect) {
  if (isCorrect && guessStreak >= 3) {
    myScore += guessStreak * 50;
    elements.pcount.textContent = guessStreak;
    streakAnimation();
  }
  if (guessStreak === 4) falseGuess++;
  elements.score.textContent = myScore;
}

// Update guess table
function updateTable() {
  elements.guessTable.innerHTML = "<tr><th>Word</th><th>Your Guess</th></tr>";
  const wordAttempts = words.reduce((acc, w, i) => {
    acc[w] = acc[w] || [];
    acc[w].push(userGuesses[i]);
    return acc;
  }, {});

  Object.entries(wordAttempts).forEach(([word, guesses]) => {
    guesses.forEach((guess, index) => {
      const row = document.createElement("tr");
      if (index === 0) {
        const wordCell = document.createElement("td");
        wordCell.textContent = word;
        wordCell.rowSpan = guesses.length;
        row.appendChild(wordCell);
      }
      const guessCell = document.createElement("td");
      guessCell.textContent = guess;
      guessCell.style.color = guess === word ? "green" : "red";
      row.appendChild(guessCell);
      elements.guessTable.appendChild(row);
    });
  });
  togglePopup();
}

function sanitizeAns(input) {
  const regex = /^[a-zA-Z0-9 ]+$/;
  input = input.replace(/[^\w\s]/gi, "");
  input = input.replace(/<\/?[^>]+(>|$)/g, "");
  return regex.test(input);
}

// Toggle popup visibility
function togglePopup() {
  toggleVisibility(elements.popUp);
  playSound(click, 0.153);
}

// Play audio sound
function playSound(audio, currentTime = 0) {
  audio.currentTime = currentTime;
  audio.play();
}
