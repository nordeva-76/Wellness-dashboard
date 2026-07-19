// Initialize streak display
let streak = Number(localStorage.getItem("streak")) || 0;
const streakElement = document.getElementById("streak");
const weightDisplay = document.getElementById("weightDisplay");

if (streakElement) {
    streakElement.textContent = `${streak} Days`;
}

// Function to save weight (Fixed the missing closing brace here)
function saveWeight() {
    const weightInput = document.getElementById("weight");
    if (!weightInput) return;

    const weight = weightInput.value;
    if (weight === "") return;

    localStorage.setItem("currentWeight", weight);

    if (weightDisplay) {
        weightDisplay.textContent = `Current Weight: ${weight} lbs`;
    }
} // <--- Added missing closing brace

/* ==========================================
   INITIALIZE LOGIC ONCE DOM IS READY
========================================== */
document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Load saved weight
    const savedWeight = localStorage.getItem("currentWeight");
    if (savedWeight && weightDisplay) {
        weightDisplay.textContent = `Current Weight: ${savedWeight} lbs`;
    }

    // 2. Handle Notes
    const notes = document.getElementById("notes");
    if (notes) {
        notes.value = localStorage.getItem("notes") || "";
        notes.addEventListener("input", function () {
            localStorage.setItem("notes", notes.value);
        });
    }

    // 3. Handle Checkboxes
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((box, index) => {
        box.checked = localStorage.getItem(`checkbox${index}`) === "true";
        box.addEventListener("change", function () {
            localStorage.setItem(`checkbox${index}`, box.checked);
        });
    });

    /* ==========================
       CALENDAR DAY TRACKER
    ========================== */
    const days = document.querySelectorAll(".day");

    days.forEach((day, index) => {
        // Load saved color state
        const savedState = localStorage.getItem(`day-${index}`);
        if (savedState) {
            day.classList.add(savedState);
        }

        // Click handler to cycle: Default -> Green -> Yellow -> Red -> Default
        day.addEventListener("click", function () {
            if (day.classList.contains("green")) {
                day.classList.remove("green");
                day.classList.add("yellow");
                localStorage.setItem(`day-${index}`, "yellow");
            } else if (day.classList.contains("yellow")) {
                day.classList.remove("yellow");
                day.classList.add("red");
                localStorage.setItem(`day-${index}`, "red");
            } else if (day.classList.contains("red")) {
                day.classList.remove("red");
                localStorage.removeItem(`day-${index}`);
            } else {
                day.classList.add("green");
                localStorage.setItem(`day-${index}`, "green");
            }
        });
    });
});

    });

});
