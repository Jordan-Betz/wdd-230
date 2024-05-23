copyDate = new Date().getFullYear();
document.getElementById("copyright").innerHTML = `<p>&copy; ${copyDate}</p><p>Jordan Betz</p><p>USA</p>`;

lastModDate = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModDate}`;