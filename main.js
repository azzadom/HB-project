const lyrics = [
  { text: "Ruby-chan?", time: 0.0, gif: "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" },
  { text: "Hai!", time: 1.6, gif: "https://media.giphy.com/media/yyVph7ANKftIs/giphy.gif" },
  { text: "Nani ga suki?", time: 2.6, gif: "https://media.giphy.com/media/l0Exk8EUzSLsrErEQ/giphy.gif" },
  { text: "Chokominto yori mo a-na-ta", time: 4.45, gif: "https://media.giphy.com/media/1wXgBZCZ52mtlWvz0k/giphy.gif" },
  { text: "Ayumu-chan?", time: 7.95, gif: "https://media.giphy.com/media/daOQ5lE52dUhgD8acn/giphy.gif" },
  { text: "Hai!", time: 9.0, gif: "https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif" },
  { text: "Nani ga suki?", time: 10.25, gif: "https://media.giphy.com/media/l3vR92CPOYrK25yLu/giphy.gif" },
  { text: "Sutoroberii fureibaa yori mo a-na-ta", time: 11.9, gif: "https://media.giphy.com/media/bOQeC2SNniMNy/giphy.gif" },
  { text: "Shiki-chan?", time: 15.0, gif: "https://media.giphy.com/media/l3vRlT2k2L35Cnn5C/giphy.gif" },
  { text: "Hai!", time: 16.3, gif: "https://media.giphy.com/media/dzaUX7CAG0Ihi/giphy.gif" },
  { text: "Nani ga suki?", time: 17.3, gif: "https://media.giphy.com/media/5xaOcLGvzHxDKjufnLW/giphy.gif" },
  { text: "Kukkii and kuriimu yori mo a-na-ta", time: 19.0, gif: "https://media.giphy.com/media/IdCV4uNdTbcALAvFUb/giphy.gif" },
  { text: "Minna?", time: 22.6, gif: "https://media.giphy.com/media/Uowdj8xg3XZ7bKlA1N/giphy.gif" },
  { text: "Hai!", time: 23.4, gif: "https://media.giphy.com/media/3og0INJlNvCLaiEC4g/giphy.gif" },
  { text: "Nani ga suki?", time: 24.6, gif: "https://media.giphy.com/media/7x5t7Xpmm6nJpqETG6/giphy.gif" },
  { text: "Mochiron daisuki aisukuriimu!", time: 26.5, gif: "https://media.giphy.com/media/bMLGNRoAy0Yko/giphy.gif" },
];

const audio = document.getElementById("lyricsAudio");
const display = document.getElementById("lyricsDisplay");
const kuromiImage = document.getElementById("kuromiImage");
const gifImage = document.getElementById("gifImage");
const sparkleText = document.getElementById("sparkle-text");

let currentLyricIndex = 0;

function showKuromiOnly() {
  kuromiImage.style.display = "block";
  gifImage.style.display = "none";
  sparkleText.style.display = "block";
}

function showGif(gifSrc) {
  kuromiImage.style.display = "none";
  gifImage.src = gifSrc;
  gifImage.style.display = "block";
  sparkleText.style.display = "none";
}

display.addEventListener('click', () => {
  if (display.textContent !== "Click Me") return;
  currentLyricIndex = 0;
  audio.currentTime = 0;
  audio.play();
  display.style.pointerEvents = "none";
  showGif(lyrics[0].gif);
});

audio.addEventListener("timeupdate", () => {
  if (currentLyricIndex < lyrics.length && audio.currentTime >= lyrics[currentLyricIndex].time) {
    const currentLyric = lyrics[currentLyricIndex];
    display.textContent = currentLyric.text;
    showGif(currentLyric.gif);
    currentLyricIndex++;
  }

  if (currentLyricIndex >= lyrics.length && audio.ended) {
    display.textContent = "Click Me";
    display.style.pointerEvents = "auto";
    showKuromiOnly();
  }

});

showKuromiOnly();
