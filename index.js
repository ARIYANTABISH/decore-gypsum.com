const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", function() {
  this.classList.toggle("active");
  const dropdownContent = this.querySelector(".dropdown-content");
  if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
  } else {
    dropdownContent.style.display = "block";
  }
});

const toggleButton = document.querySelector('.navbar-toggle');
const navbarLinks = document.querySelector('.navbar-nav');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});
 


let mainCard = document.getElementById('mainCard');

 console.log(mainCard.search('sabiyat'))
 console.log