// Hamburger navigation
const hamburgerNav = document.getElementById('nav-toggle');
const navigation = document.querySelector('.nav-list');

hamburgerNav.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburgerNav.classList.toggle('open');
})

// Darkmode
const darkmodeButton = document.getElementById('darkmode-toggle');
const body = document.querySelector('body');

darkmodeButton.addEventListener('click', () => {
    body.classList.toggle('dark');
})

// Visit Count
const visitDisplay = document.getElementById('visit-count');
let numberVisits = Number(window.localStorage.getItem('numberVisits-ls')) || 0;

console.log(numberVisits)

if (numberVisits !== 0) {
    visitDisplay.textContent = numberVisits;
} else {
    visitDisplay.textContent = 'This is your first visit. Welcome!';
}

numberVisits++;

localStorage.setItem('numberVisits-ls', numberVisits);