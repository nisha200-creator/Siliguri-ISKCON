document.addEventListener("DOMContentLoaded", function() {
    // When the page is fully loaded, attach the scroll event
    window.addEventListener("scroll", function() {
      var navbar = document.querySelector('.navbar');
      // Check if the page has been scrolled more than 50px
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  });
  