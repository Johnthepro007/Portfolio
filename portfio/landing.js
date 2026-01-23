const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

 document.getElementById("learnMoreBtn").addEventListener("click", () => {
    document.getElementById("features").scrollIntoView({
      behavior: "smooth"
    });
  });
  
  document.getElementById("projectsBtn").addEventListener("click", () => {
  window.location.href = "landingprojects.html";
});
