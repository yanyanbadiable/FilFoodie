// Burger Menu
const burger = document.querySelector(".burger-icon");
const navMenu = document.querySelector("nav");

burger.addEventListener('click', () => {
  navMenu.classList.toggle("active");
})

// Heart
const icons = Array.from(document.querySelectorAll('#changeIcon'));
    icons.forEach(icon => {
      icon.addEventListener('click', () => {
          if(icon.className=="fa-regular fa-heart"){
            icon.className = "fa-solid fa-heart";
            icon.style.color = "#D63E3E"
          }else{
            icon.className = "fa-regular fa-heart";
            icon.style.color = "#D63E3E"
          }
      });
});

