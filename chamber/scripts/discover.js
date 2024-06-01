// Last Visit
function getMessage() {
    // get current date
    let currentDate = new Date();
    let storedDate;
    let message;

    // get date from localStorage
    let date = localStorage.getItem('date');

    if (date) {
        // convert storedDate to a date object
        storedDate = new Date(parseInt(date));
    }

    // compare the dates and return the appropriate message
    if (date) {
        let differenceInTime = currentDate.getTime() - storedDate.getTime();

        if (differenceInTime < 86400000) { // 24 hours in milliseconds
            message = 'Back so soon! Awesome!';
        }
        else {
            let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));
            message = `You last visited ${differenceInDays} days ago.`;
        }
    } else {
        message = 'Welcome! Let us know if you have any questions.';
    }

    // store date in local storage
    localStorage.setItem('date', currentDate.getTime());

    return message;
}

let displayMessage = getMessage();
document.getElementById('visit-display').textContent = displayMessage;