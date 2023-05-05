// genres



// first slider

new Swiper('#swiper-1', {

    loop: true,
    slidesPerView: 6.2,
    allowTouchMove: false,
    navigation: {
      nextEl: '#next',
      prevEl: '#prev',
    },
  
})

// second slider

new Swiper('#swiper-2', {

    loop: true,
    slidesPerView: 6.2,
    allowTouchMove: false,
    navigation: {
      nextEl: '#next2',
      prevEl: '#prev2',
    },
  
})

// thirth slider

new Swiper('#swiper-3', {

    loop: true,
    slidesPerView: 6.2,
    allowTouchMove: false,
    navigation: {
      nextEl: '#next3',
      prevEl: '#prev3',
    },
  
})

// current year footer

window.onload = function() {

    let currentYear = document.getElementById('current-year');
    currentYear.innerText = new Date().getFullYear();
  
}