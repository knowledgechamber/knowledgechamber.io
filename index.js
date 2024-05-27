function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;
    if (hours < 12) {
        greeting = "Good morning";
    } else if (hours < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }
    document.getElementById('greeting').textContent = greeting;
    const hoursString = hours.toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('clock').textContent = `${hoursString}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();