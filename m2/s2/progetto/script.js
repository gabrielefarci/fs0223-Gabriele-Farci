// genres

let buttonGenres = document.getElementById('btn-genres');
buttonGenres.addEventListener('click', showHideGenres);

let listGenres = document.getElementById('list-genres');
listGenres.style.display = 'none';

function showHideGenres() {

    if(listGenres.style.display === 'none') {
        listGenres.style.display = 'block';
    } else {
        listGenres.style.display = 'none';
    }

}

// first slider

new Swiper('#swiper-1', {

    loop: true,
    slidesPerView: 6.2,
    allowTouchMove: false,
    navigation: {
      nextEl: '#next',
      prevEl: '#prev',
    },
    breakpoints: {
        1400: {
            slidesPerView: 6.2,
        },
        1100: {
            slidesPerView: 5.2,
        },
        885: {
            slidesPerView: 4.2,
        },
        350: {
            slidesPerView: 2.2,
        }
    }

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
    breakpoints: {
        1400: {
            slidesPerView: 6.2,
        },
        1100: {
            slidesPerView: 5.2,
        },
        885: {
            slidesPerView: 4.2,
        },
        350: {
            slidesPerView: 2.2,
        }
    }
  
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
    breakpoints: {
        1400: {
            slidesPerView: 6.2,
        },
        1100: {
            slidesPerView: 5.2,
        },
        885: {
            slidesPerView: 4.2,
        },
        350: {
            slidesPerView: 2.2,
        }
    }
  
})

// current year footer

window.onload = function() {

    let currentYear = document.getElementById('current-year');
    currentYear.innerText = new Date().getFullYear();
  
}

/* hero content color */

let className = "inverted";
let scrollTrigger = 60;

window.onscroll = function() {
  
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.querySelector('.hero-content').classList.add('active');
  } else {
    document.querySelector('.hero-content').classList.remove('active');
  }
};

// show search area 

let btnSearch = document.getElementById('search');
btnSearch.addEventListener('click', showArea);

let areaText = document.getElementById('input-search');
areaText.style.display = 'none';

function showArea() {
    if(areaText.style.display == 'none') {
        areaText.style.display = 'block';
    } else {
        areaText.style.display = 'none';
    }
}