// Add interactivity if needed
// Add any custom JavaScript here if needed

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Custom Cursor
// const cursor = document.querySelector('.cursor');
// document.addEventListener('mousemove', (e) => {
//   cursor.style.left = `${e.pageX}px`;
//   cursor.style.top = `${e.pageY}px`;
// });

// // Add hover effect to cursor
// const hoverElements = document.querySelectorAll('a, button, .nav-link');
// hoverElements.forEach(element => {
//   element.addEventListener('mouseenter', () => {
//     cursor.classList.add('hover');
//   });
//   element.addEventListener('mouseleave', () => {
//     cursor.classList.remove('hover');
//   });
// });

// Animate on Scroll
const animateElements = document.querySelectorAll('.animate__animated');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add(entry.target.dataset.animation);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

animateElements.forEach(element => {
  observer.observe(element);
});


// document.addEventListener('DOMContentLoaded', function () {
//   const darkModeToggle = document.getElementById('darkModeToggle');
//   const body = document.body;
//   const navbar = document.querySelector('.navbar');

//   // Check for saved dark mode preference in localStorage
//   const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

//   // Apply dark mode if enabled
//   if (isDarkMode) {
//     body.classList.add('dark-mode');
//     navbar.classList.add('dark-mode');
//     darkModeToggle.textContent = '☀️ Light Mode';
//   }

//   // Toggle dark mode
//   darkModeToggle.addEventListener('click', function () {
//     body.classList.toggle('dark-mode');
//     navbar.classList.toggle('dark-mode');

//     if (body.classList.contains('dark-mode')) {
//       localStorage.setItem('darkMode', 'enabled');
//       darkModeToggle.textContent = '☀️ Light Mode';
//     } else {
//       localStorage.setItem('darkMode', 'disabled');
//       darkModeToggle.textContent = '🌙 Dark Mode';
//     }
//   });
// });