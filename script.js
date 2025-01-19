// Placeholder for potential interactivity or dynamic features in the future
if (window.location.pathname === "/index.html") {
  window.location.replace("/");
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('Website loaded successfully.');
});
 document.getElementById("year").textContent = new Date().getFullYear();
document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
