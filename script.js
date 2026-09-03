// Replace this with the email address that should receive booking requests.
const BOOKING_EMAIL = "alisonphillip09@gmail.com";

const nav = document.querySelector(".nav");
document.querySelector(".menu-btn").addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("bookingForm").addEventListener("submit", function (event) {
  event.preventDefault();

  if (BOOKING_EMAIL.includes("alisonphillip09@gmail.com")) {
    document.getElementById("formMessage").textContent =
      "Your form is ready! First replace the email address in script.js with your Sisterhood Sitters email.";
    return;
  }

  const data = new FormData(this);
  const subject = encodeURIComponent("Sisterhood Sitters Booking Request");
  const body = encodeURIComponent(
`New booking request

Parent/Guardian: ${data.get("name")}
Email: ${data.get("email")}
Children: ${data.get("children")}
Ages: ${data.get("ages")}
Date: ${data.get("date")}
Time: ${data.get("start")} - ${data.get("end")}
Location: ${data.get("location")}

Additional information:
${data.get("notes") || "None"}`
  );

  window.location.href = `mailto:${BOOKING_EMAIL}?subject=${subject}&body=${body}`;
});
