/* change nav color */

let className = "inverted";
let scrollTrigger = 330;

window.onscroll = function() {
  
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.querySelector('nav').classList.add('active');
  } else {
    document.querySelector('nav').classList.remove('active');
  }
};