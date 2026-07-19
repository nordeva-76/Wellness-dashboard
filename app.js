// Wellness Dashboard App

let streak = Number(localStorage.getItem("streak")) || 0;

const streakElement = document.getElementById("streak");
const weightDisplay = document.getElementById("weightDisplay");

if (streakElement) {
    streakElement.textContent = `${streak} Days`;
}

function saveWeight() {
    const weightInput = document.getElementById("weight");

    if (!weightInput) return;

    const weight = weightInput.value;

    if (weight === "") return;

    localStorage.setItem("currentWeight", weight);

    if (weightDisplay) {
        weightDisplay.textContent = `Current Weight: ${weight} lbs`;
    }
}

window.onload = function () {

    const savedWeight = localStorage.getItem("currentWeight");

    if (savedWeight && weightDisplay) {
        weightDisplay.textContent = `Current Weight: ${savedWeight} lbs`;
    }

    const notes = document.getElementById("notes");

    if (notes) {

        notes.value = localStorage.getItem("notes") || "";

        notes.addEventListener("input", function () {
            localStorage.setItem("notes", notes.value);
        });

    }

    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    checkboxes.forEach((box, index) => {

        box.checked = localStorage.getItem(`checkbox${index}`) === "true";

        box.addEventListener("change", function () {
            localStorage.setItem(`checkbox${index}`, box.checked);
        });

    });

};
