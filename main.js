// Get all the navigation links
const navLinks = document.querySelectorAll('.nav-links ul li a');

// Add event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    // Remove 'active' class from all links
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Add 'active' class to the clicked link
    event.target.classList.add('active');
  });
});

// Apply 'active' class to the current page link
const currentPath = window.location.pathname;
navLinks.forEach(link => {
  const linkPath = link.getAttribute('href');
  if (linkPath === currentPath || (linkPath === 'index.html' && currentPath === '/')) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});
