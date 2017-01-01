var audioKeys = {
  a: {
    audioTrack: document.querySelector("audio[class=boom]"),
    domEle: document.querySelector("div .boom")
  },
  s: {
    audioTrack: document.querySelector("audio[class=clap]"),
    domEle: document.querySelector("div .clap")
  },
  d: {
    audioTrack: document.querySelector("audio[class=hihat]"),
    domEle: document.querySelector("div .hihat")
  },
  f: {
    audioTrack: document.querySelector("audio[class=kick]"),
    domEle: document.querySelector("div .kick")
  },
  g: {
    audioTrack: document.querySelector("audio[class=openhat]"),
    domEle: document.querySelector("div .openhat")
  },
  h: {
    audioTrack: document.querySelector("audio[class=ride]"),
    domEle: document.querySelector("div .ride")
  },
  j: {
    audioTrack: document.querySelector("audio[class=snare]"),
    domEle: document.querySelector("div .snare")
  },
  k: {
    audioTrack: document.querySelector("audio[class=tink]"),
    domEle: document.querySelector("div .tink")
  },
  l: {
    audioTrack: document.querySelector("audio[class=tom]"),
    domEle: document.querySelector("div .tom")
  },

};

for (var key in audioKeys) {
  audioKeys[key].domEle.addEventListener('transitionend', removeTransition);
  // audioKeys[key].domEle.addEventListener("webkitTransitionEnd", removeTransition);
}


function removeTransition() {
  console.log(this.classList.remove("playing"));
}

window.addEventListener("keydown", function(e) {
  var keyPressed = e.key;

  if (audioKeys[keyPressed]) {
    audioKeys[keyPressed].domEle.classList.add("playing");
    audioKeys[keyPressed].audioTrack.currentTime = 0;
    audioKeys[keyPressed].audioTrack.play();
  }


});
