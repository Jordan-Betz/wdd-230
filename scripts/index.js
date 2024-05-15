// Hamburer navigation
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