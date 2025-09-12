// multi -Text
var typed = new Typed(".multi-text", {
  strings: [
                'Website Designer', 
                'Website Developer', 
                'Photo Editor', 
                'Video Editor', 
                'Business Developer', 
                'Data Analysis'
            ],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true
});

let navLinks = document.querySelectorAll('.nav-link');
let navbarToggler = document.querySelector('.navbar-toggler');
let navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navbarToggler && navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  });
});