const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlide = document.querySelector("volumeSlider input");
const keysCheck = document.querySelector(".key-check input");

let mapKeys = [];
let audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    console.log(mapKeys);
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
    if (mapKeys.includes(e.key)) {
        playTune(e.key);
    }
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
};
const showHideKeys = () => {
    pianoKeys.forEach((key) => key.
        classList.toggle("hide"));
};

volumeSlide.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHideKeys);