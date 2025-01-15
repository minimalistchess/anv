// Placeholder for potential interactivity or dynamic features in the future
if (window.location.pathname === "/index.html") {
  window.location.replace("/");
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('Website loaded successfully.');
});
 document.getElementById("year").textContent = new Date().getFullYear();
