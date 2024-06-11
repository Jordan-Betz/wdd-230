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

// Password validation
const passwordPrimary = document.getElementById('password');

const passwordConfirm = document.getElementById('password-check');

const message = document.getElementById('password-message');

passwordConfirm.addEventListener('focusout', checkPasswords);

function checkPasswords() {
    if (passwordPrimary.value !== passwordConfirm.value) {
        message.textContent = 'Passwords do not match!'
        passwordPrimary.value = '';
        passwordConfirm.value = '';
        passwordPrimary.focus();
    } else {
        message.textContent = '';
    }
}

// Page Rating
const rangeValue = document.getElementById('range-value-display');

const range = document.getElementById('rating');

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangeValue.innerHTML = range.value;
}