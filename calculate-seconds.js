
banana = ""
banana = prompt("Enter DOB (YYYY-MM-DD)")
if (banana == ""){
    banana = "2007-12-23"
}
function updateSecondsAlive() {
    // Replace 'YYYY-MM-DD' with your actual birthdate in the format 'YYYY-MM-DD'
    const birthDate = new Date(banana);
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const timeDifference = currentDate - birthDate;

    // Convert milliseconds to seconds
    const secondsAlive = (timeDifference / 1000 / 31557600);

    // Update the text in the div with the calculated seconds
    const centeredText = document.getElementById('centered-text');
    centeredText.textContent = secondsAlive.toFixed(8);
}

// Update every quarter of a second (250 milliseconds)
setInterval(updateSecondsAlive, 0);
