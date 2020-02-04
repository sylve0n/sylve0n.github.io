var glitchText = document.querySelector('#glitch-text');
var style = document.createElement('style');

function setRandomAnimationDuration() {
  var randomNumAfter = Math.random() * 3 + 1 + 's';
  var randomNumBefore = Math.random() * 3 + 1 + 's';
  style.innerHTML =
  "#glitch-text::after {animation: glitch-anim " + randomNumAfter + " infinite;} #glitch-text::before {animation: glitch-anim " + randomNumBefore + " infinite;}"
  document.head.appendChild(style);
}

glitchText.addEventListener('animationiteration', setRandomAnimationDuration);