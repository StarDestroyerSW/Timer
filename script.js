document.addEventListener("DOMContentLoaded", function() {
    // Get the countdown element
    const countdownElement = document.getElementById("countdown");

    // Function to update the countdown
    function updateCountdown() {
        // Calculate the number of days until May 10th
        const now = new Date();
        const may10 = new Date(now.getFullYear(), 4, 10); // Months are zero-based (0-11)
        if (now.getMonth() > 4 || (now.getMonth() === 4 && now.getDate() > 10)) {
            may10.setFullYear(now.getFullYear() + 1);
        }
        const timeDiff = may10.getTime() - now.getTime();
        const daysUntilMay10 = timeDiff / (1000 * 3600 * 24);

        // Update the countdown in a hidden element
        const hiddenCountdownElement = document.createElement("p");
        hiddenCountdownElement.textContent = daysUntilMay10.toFixed(6);

        // Swap the elements
        countdownElement.textContent = hiddenCountdownElement.textContent;

        // Request the next frame
        requestAnimationFrame(updateCountdown);
    }

    // Start the countdown
    updateCountdown();
});
