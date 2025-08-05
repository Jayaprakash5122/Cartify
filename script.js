function openLogin() {
  document.getElementById("loginOverlay").style.display = "flex";
}
function closeLogin() {
  document.getElementById("loginOverlay").style.display = "none";
}
// Toggle the mobile menu
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}
