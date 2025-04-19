function playTrack(file, name) {
    let audio = document.getElementById("audio");
    let trackName = document.getElementById("current-track");

    audio.src = file;
    trackName.textContent = "Lecture : " + name;
    audio.play();
}

const toggleBtn = document.getElementById("toggle-message");
const loveMessage = document.getElementById("love-message");

toggleBtn.addEventListener("click", () => {
    if (loveMessage.classList.contains("hidden")) {
        loveMessage.classList.remove("hidden");
        toggleBtn.textContent = "Fermer 💌";
        toggleBtn.classList.remove("glow"); // désactive l'effet lumineux
    } else {
        loveMessage.classList.add("hidden");
        toggleBtn.textContent = "Ouvrir moi !";
        toggleBtn.classList.add("glow"); // remet l'effet lumineux
    }
});



