copyDate = new Date().getFullYear();
document.getElementById("copyright").innerHTML = `<p>&copy; ${copyDate} Helena Chamber</p>`;


lastModDate = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModDate}`;

// Hamburer navigation
const hamburgerNav = document.getElementById('nav-toggle');
const navigation = document.getElementById('nav-list');

hamburgerNav.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburgerNav.classList.toggle('open');
})