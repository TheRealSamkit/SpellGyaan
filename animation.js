export { shakeContainer, streakAnimation, buttonAni };

function streakAnimation() {
  toggleVisibility(elements.streak);
  anime({
    targets: ".streak-container",
    translateX: [300, -300],
    duration: 4000,
    easing: "easeOutExpo",
    complete: function () {
      toggleVisibility(elements.streak);
    },
  });
}

function buttonAni() {
  anime({
    targets: ".diff",
    translateY: [-500, 0],
    duration: 1000,
    easing: "easeOutBounce",
    delay: anime.stagger(100),
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
