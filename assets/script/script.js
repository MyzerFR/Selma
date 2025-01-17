function formatNumber(num) {
    return num.toLocaleString("fr-FR");
}

function updateChrono() {
    const startTime = new Date("2024-04-13T00:00:00").getTime();
    const now = new Date().getTime();
    let elapsed = now - startTime;

    let seconds = Math.floor((elapsed / 1000) % 60);
    let minutes = Math.floor((elapsed / (1000 * 60)) % 60);
    let hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);
    let days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    let totalHours = Math.floor(elapsed / (1000 * 60 * 60));
    let totalMinutes = Math.floor(elapsed / (1000 * 60));

    document.getElementById("chrono").innerText = 
        `Nous sommes en couple depuis \n${formatNumber(days)} jours`;
    document.getElementById("hours").innerText = 
        `Mais aussi : ${formatNumber(totalHours)} heures`;
    document.getElementById("minutes").innerText = 
        `Ou alors : ${formatNumber(totalMinutes)} minutes`;
}

setInterval(updateChrono, 1000);
updateChrono();