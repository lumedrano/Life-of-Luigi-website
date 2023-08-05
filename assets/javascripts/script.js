//for menu
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.left = "0";
}

function hideMenu() {
    navLinks.style.left = "-100%";
}

//for slidein/fadein effect of bullet points
function reveal() {
var reveals = document.querySelectorAll(".reveal");

for (var i = 0; i < reveals.length; i++) {
var windowHeight = window.innerHeight;
var elementTop = reveals[i].getBoundingClientRect().top;
var elementVisible = 150;

if (elementTop < windowHeight - elementVisible) {
  reveals[i].classList.add("active");
} else {
  reveals[i].classList.remove("active");
}
}
}

window.addEventListener("scroll", reveal);
reveal();

//this expands the photos when clicked on 
function toggleExpand(element) {
element.classList.toggle('expanded');
}

// JavaScript code for smooth scrolling
document.addEventListener("DOMContentLoaded", function () {
        const links = document.querySelectorAll(".scroll-link");

        for (const link of links) {
            link.addEventListener("click", smoothScroll);
        }

        function smoothScroll(event) {
            event.preventDefault();
            const targetId = event.target.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            const headerOffset = 100; // Adjust this value to account for any fixed header height

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollBy({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                // Optional: Add class to indicate active link
                for (const link of links) {
                    link.classList.remove("active-link");
                }
                event.target.classList.add("active-link");
            }
        }
    });