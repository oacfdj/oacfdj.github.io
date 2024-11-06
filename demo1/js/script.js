document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("mouseenter", function () {
            this.style.backgroundColor = "#fff";
            this.style.color = "#cc0000";
        });
        
        link.addEventListener("mouseleave", function () {
            this.style.backgroundColor = "transparent";
            this.style.color = "#fff";
        });
    });
});
