const decks = Array.from(document.getElementsByTagName("main"));
const previousSlideButton = document.getElementById("previous-slide");
const nextSlideButton = document.getElementById("next-slide");
const previousDeckButton = document.getElementById("previous-deck");
const nextDeckButton = document.getElementById("next-deck");
var decksIndex = 0;
var slidesIndex = 0;

decks.forEach((deck) => {
  deck.style.width = deck.getElementsByTagName("section").length + "00vw";
});

function showFooter() {
  decks[decksIndex].getElementsByTagName("footer")[0].style.display = "flex";
}

function moveSlide(dir) {
  const newSlidesIndex = slidesIndex + dir;
  const slides = Array.from(decks[decksIndex].getElementsByTagName("section"));
  if (newSlidesIndex >= 0 && newSlidesIndex < slides.length) {
    slidesIndex = newSlidesIndex;
    slides.forEach((slide) => {
      slide.style.transform = "translateX(-" + slidesIndex + "00vw)";
    });
  }
}

const moveDeck = (dir) => {
  const newDecksIndex = decksIndex + dir;
  if (newDecksIndex >= 0 && newDecksIndex < decks.length) {
    decksIndex = newDecksIndex;
    decks.forEach((deck) => {
      deck.style.transform = "translateY(-" + decksIndex + "00vh)";
    });
    showFooter();
  }
};

nextSlideButton.addEventListener("click", (e) => {
  moveSlide(1);
});
previousSlideButton.addEventListener("click", (e) => {
  moveSlide(-1);
});
nextDeckButton.addEventListener("click", (e) => {
  moveDeck(1);
});
previousDeckButton.addEventListener("click", (e) => {
  moveDeck(-1);
});

showFooter();
