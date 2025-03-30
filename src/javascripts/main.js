import "bootstrap"

const pauseButton = document.getElementById('pauseButton');
const cowImage = document.getElementById('cowImage');


pauseButton.addEventListener('click', function() {

    cowImage.classList.toggle('paused');

    if (cowImage.classList.contains('paused')) {
        pauseButton.textContent = "Resume Animation";
    } else {
        pauseButton.textContent = "Pause Animation";
    }
});
    
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".col");
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const filterValue = this.getAttribute("data-filter");
  
        projectCards.forEach((card) => {
          const category = card.getAttribute("data-category");
          if (filterValue === "all" || category === filterValue) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  });
filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    });
});



(function() {
    emailjs.init("bB5jg5PRoDGxv93n5");
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("service_kt6yaag", "template_49b570i", this)
        .then(function() {
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset();
        }, function(error) {
            alert("Failed to send message. Please try again.");
            console.log(error);
        });
});
    