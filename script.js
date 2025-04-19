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




// Compte à rebours
const startDate = new Date("2024-10-12T00:00:00"); // Date de début
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    const now = new Date();
    const timeDiff = now - startDate;

    const seconds = Math.floor(timeDiff / 1000);
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    countdownElement.innerText = `Nous sommes ensemble depuis ${days}j ${hours}h ${minutes}m ${secs}s ❤️`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
