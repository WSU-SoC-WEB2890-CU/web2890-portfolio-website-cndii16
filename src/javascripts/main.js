import "bootstrap";

// Pause/Resume Animation
const pauseButton = document.getElementById('pauseButton');
const cowImage = document.getElementById('cowImage');
pauseButton.addEventListener('click', function () {
  cowImage.classList.toggle('paused');
  pauseButton.textContent = cowImage.classList.contains('paused') ? "Resume Animation" : "Pause Animation";
});

//Filtering
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filterValue = this.getAttribute("data-filter");


      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      
      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");

        if (filterValue === "all" || category === filterValue) {
          
          card.classList.remove("hidden");
        } else {
          
          card.classList.add("hidden");
        }
      });


      const projectsGrid = document.querySelector('.projects-grid');
      projectsGrid.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});




// EmailJS
(function () {
  emailjs.init("bB5jg5PRoDGxv93n5");
})();

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs.sendForm("service_kt6yaag", "template_49b570i", this)
    .then(function () {
      alert("Message sent successfully!");
      document.getElementById("contact-form").reset();
    }, function (error) {
      alert("Failed to send message. Please try again.");
      console.log(error);
    });
});
