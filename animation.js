export { shakeContainer, streakAnimation, buttonAni };

const streak = document.querySelector(".streak-container");
function streakAnimation() {
  toggleVisibility(streak);
  anime({
    targets: ".streak-container",
    translateX: [300, -300],
    duration: 4000,
    easing: "easeOutExpo",
    complete: function () {
      toggleVisibility(streak);
    },
  });
}

function buttonAni() {
  anime({
    targets: ".diff",
    translateY: [-500, 0],
    duration: 1000,
    easing: "easeOutBounce",
    delay: anime.stagger(50),
  });
}

function shakeContainer() {
  anime({
    targets: ".container",
    translateX: [
      { value: -10, duration: 100 },
      { value: 10, duration: 100 },
      { value: -7, duration: 100 },
      { value: 7, duration: 100 },
      { value: 0, duration: 100 },
    ],
    easing: "easeInOutQuad",
  });
}

function toggleVisibility(element) {
  element.classList.toggle("hide");
}
