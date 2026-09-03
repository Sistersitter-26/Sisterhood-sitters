// Replace this with the email address that should receive booking requests.
const BOOKING_EMAIL = "sisterhoodsitters3@gmail.com";

const nav = document.querySelector(".nav");
document.querySelector(".menu-btn").addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});
