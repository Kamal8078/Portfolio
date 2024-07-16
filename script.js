// JavaScript for About Section
var aboutSection = document.getElementById('about');


document
.getElementById("contact-link")
.addEventListener("click", function (event) {
  event.preventDefault();
  document
    .querySelectorAll("section")
    .forEach((section) => section.classList.add("hidden"));
  document.getElementById("contact").classList.remove("hidden");
});
// Example: Toggle visibility of additional info on About link click
document.querySelector('nav ul li a[href="#about"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Example: Toggle visibility of some additional content
    if (aboutSection.style.display === 'none' || aboutSection.style.display === '') {
        aboutSection.style.display = 'block';
    } else {
        aboutSection.style.display = 'none';
    }
    
    // You can add more specific actions here based on your requirements
});
