document.addEventListener("DOMContentLoaded", () => {
    // Select all day elements
    const days = document.querySelectorAll(".day");

    // Add click event listener to each day
    days.forEach(day => {
        day.addEventListener("click", () => {
            // Toggle the "completed" state
            day.classList.toggle("completed");
            day.textContent = day.classList.contains("completed")
                ? `Day ${day.dataset.day} ✔`
                : `Day ${day.dataset.day}`;
        });
    });

    // Handle reset button
    const resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", () => {
        // Clear all days' states
        days.forEach(day => {
            day.classList.remove("completed");
            day.textContent = `Day ${day.dataset.day}`;
        });

        // Refresh the page
        location.reload();
    });
});
