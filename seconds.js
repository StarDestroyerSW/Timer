document.addEventListener("DOMContentLoaded", function() {
    // Get the element to display the seconds
    const secondsElement = document.getElementById("seconds-until-next-day");

    // Function to update the number of seconds until 8:30 AM tomorrow
    function updateSecondsUntilNextDay() {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(now.getDate() + 1);
        tomorrow.setHours(8, 30, 0, 0); // Set time to 8:30 AM of the next day

        const timeDiff = tomorrow.getTime() - now.getTime();
        const secondsUntilTomorrow = timeDiff / 1000;

        // Display the seconds with 7 decimal places
        secondsElement.textContent = secondsUntilTomorrow.toFixed(3);

        // Request the next frame
        requestAnimationFrame(updateSecondsUntilNextDay);
    }

    // Start updating the seconds
    updateSecondsUntilNextDay();
});
