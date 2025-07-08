var randomMessageButton = document.querySelector("#random");
var randomMessageDisplay = document.querySelector("#random-display");
var messages = [
  "Thanks for looking at my website",
  "Nice to meet you",
  "You are cool",
];

randomMessageButton.addEventListener("click", function () {
  var randomIndex = Math.floor(Math.random() * messages.length);
  var randomMessage = messages[randomIndex];
  randomMessageDisplay.textContent = randomMessage;
});
