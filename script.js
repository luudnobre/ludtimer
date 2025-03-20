let tasks = [];
let timer;
let intervalId;

function startTimer() {
    document.getElementById("startSound").play();
    const durationInput = document.getElementById('duration');
    timer = durationInput.value * 60;
    updateTimerDisplay();

    intervalId = setInterval(() => {
        if (timer <= 0) {
            clearInterval(intervalId);
            document.getElementById("endSound").play();
        } else {
            timer--;
            updateTimerDisplay();
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(intervalId);
}

function resetTimer() {
    clearInterval(intervalId);
    timer = 0;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    document.getElementById('timer').innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function addMission() {
    const missionInput = document.getElementById("missionInput");
    const missionText = missionInput.value.trim();
    if (missionText === "") return;

    const missionContainer = document.getElementById("missions-container");

    const missionDiv = document.createElement("div");
    missionDiv.classList.add("mission");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const label = document.createElement("label");
    label.textContent = missionText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "❌";
    removeButton.onclick = () => missionDiv.remove();

    missionDiv.appendChild(checkbox);
    missionDiv.appendChild(label);
    missionDiv.appendChild(removeButton);

    missionContainer.appendChild(missionDiv);
    missionInput.value = "";
}

// Adicionando som ao iniciar e finalizar o Pomodoro
const startSound = new Audio("start.mp3"); // Som ao iniciar
const endSound = new Audio("end.mp3"); // Som ao terminar

function startTimer() {
    startSound.play(); // Toca o som de início
    const durationInput = document.getElementById('duration');
    timer = durationInput.value * 60;
    updateTimerDisplay();

    intervalId = setInterval(() => {
        if (timer <= 0) {
            clearInterval(intervalId);
            endSound.play(); // Toca o som de fim
        } else {
            timer--;
            updateTimerDisplay();
        }
    }, 1000);
}


function showInstructions() {
    document.getElementById('instruction-popup').style.display = 'block';
}

function closeInstructions() {
    document.getElementById('instruction-popup').style.display = 'none';
}
