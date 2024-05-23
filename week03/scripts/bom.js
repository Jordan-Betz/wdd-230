const input = document.getElementById('favchap');

const button = document.querySelector('button');

const list = document.getElementById('list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function clearInput() { // Function for clearing input fields
    input.value = '';
    input.focus();
}

function setChapterList() { // Function to send chaptersArray to localStorage
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // Remove ❌ symbol
    chaptersArray = chaptersArray.filter((item) => item !== chapter); // Remove chosen chapter
    setChapterList(); // Overwrite localStorage
}

button.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default behavior
    if (input.value != '') { // If input is not empty
        displayList(input.value); // Call the function to display chapters
        chaptersArray.push(input.value); // Add the chapter to the end of the array
        setChapterList(); // Update localStorage
    } else { // Focus on input if it is empty
        input.focus();
    }
    clearInput(); // Clear the input field
});

function displayList(item) {
    const li = document.createElement('li'); // Create li element
    const deleteButton = document.createElement('button'); // Create delete button
    li.textContent = item; // Populate li elements with input value
    deleteButton.textContent = '❌'; // Populate the delete button textContent with ❌
    li.appendChild(deleteButton); // Append the li element with the delete button
    list.appendChild(li); // Append the li element to the HTML unordered list
    deleteButton.addEventListener('click', function () { // Add event listener to remove li
        list.removeChild(li)
        deleteChapter(li.textContent) // Function to remove the chapter from array and localStorage
        // clearInput();
        input.focus();
    });
};