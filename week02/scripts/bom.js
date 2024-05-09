const input = document.getElementById('favchap');

const button = document.querySelector('button');

const list = document.getElementById('list');

button.addEventListener('click', (e) => {
    // Prevent deafult action of the button
    e.preventDefault();
    if (input.value) {
        // Create li element
        const li = document.createElement('li');

        // Create delete button
        const deleteButton = document.createElement('button');

        // Populate li elements with input value
        li.textContent = input.value;

        // Populate the delete button textContent with ❌
        deleteButton.textContent = "❌";

        // Append the li element with the delete button
        li.appendChild(deleteButton);

        // Append the li element to the HTML unordered list
        list.appendChild(li);

        // Add event listener to remove li
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            clearInput();
        });

    } else {
        input.focus();
    }
    clearInput();
});

function clearInput() {
    input.value = '';
    input.focus();
}