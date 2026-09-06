// Replace this with the email address that should receive booking requests.
const BOOKING_EMAIL = "sisterhoodsitters3@gmail.com";

const nav = document.querySelector(".nav");
document.querySelector(".menu-btn").addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});
function toggleSisters(show) {
  const sistersSection = document.getElementById('sisters');
  const mainSections = document.querySelectorAll('main > section:not(#sisters)');

  if (show) {
    mainSections.forEach(sec => sec.style.display = 'none');
    sistersSection.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    mainSections.forEach(sec => sec.style.display = '');
    sistersSection.style.display = 'none';
  }
}
