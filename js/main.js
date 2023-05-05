let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let submenu = document.querySelector('.submenu');
let menuLinks = menu.querySelectorAll('.nav__link');
let submenuLinks = submenu.querySelectorAll('.submenu__link');

burger.addEventListener('click',

  function() {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    submenu.classList.toggle('submenu--active');

    document.body.classList.toggle('stop-scroll');
    
  })

menuLinks.forEach(function(el) {
  el.addEventListener('click', function() {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    submenu.classList.remove('submenu--active');

    document.body.classList.remove('stop-scroll');

  })
})



document.getElementById("enter-btn").addEventListener('click', function() {
  document.getElementById("modal-lk").classList.add("open")
})

document.getElementById("modal-close-btn").addEventListener('click', function() {
  document.getElementById("modal-lk").classList.remove("open")
})

document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("modal-lk").classList.remove("open")
  }
});

document.querySelector("#modal-lk .modal").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("modal-lk").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
})



let play = document.querySelectorAll('.play-animation');

play.forEach((ele) => {
  
    ele.addEventListener('click',(el) => {
  
      ele.classList.toggle('play-animation--active')
  
    })
  
  });



let player = document.querySelector('.player');
let openMusic = document.querySelector('.player__open-btn');
let openImg = document.querySelector('.player__open-img');
let menuMusic = document.querySelectorAll('.player__wrapper');

openMusic.addEventListener('click', 
  function() {

    menuMusic.forEach(elem => { 
      elem.classList.toggle('player__wrapper--active');
    });

    openImg.classList.toggle('player__open-img--active');

});





const btnMore = document.querySelector('.podcasts__btn');
const podcastsItems = document.querySelectorAll('.podcasts__item');

btnMore.addEventListener('click', () => {

  podcastsItems.forEach(el => { el.classList.add('podcasts__item--visible') });

  btnMore.classList.toggle('podcasts__btn--hidden');

  podcastsItems.forEach(el => { el.classList.remove('podcasts__item--hidden') });

});



const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: "",
});



const tabItem = document.querySelectorAll('.accordion__btn');
const tabContent = document.querySelectorAll('.tabs__item');

tabItem.forEach(function(element){
  element.addEventListener('click', open);
});

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function(item){
    item.classList.remove('accordion__btn--active');
  });

  tabContent.forEach(function(item){
    item.classList.remove('tabs__item--active');
  });

  tabTarget.classList.add('accordion__btn--active');
  document.querySelector(`#${button}`).classList.add('tabs__item--active');

}



const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  slidesPerGroup: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.s-button-next',
    prevEl: '.s-button-prev',
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});



const validators = new JustValidate('.modal__form', {
  rules: {
    password: {
      required: true,
      minLenght: 2,
      maxLenght: 15,
    },
    login: {
      required: true
    }
  },
  colorWrong: 'red',
  tooltip: {
    fadeOutTime: 4000,
    selectorWrap: '.form-tooltip'
  },
  messages: {
    login: {
      required: 'Ошибка'
    },
    password: {
      required: 'Ошибка'
    }
  }
});



const validator = new JustValidate('.about__form', {
  rules: {
    text: {
      required: true
    },
    checkbox: {
      required: true
    },
    name: {
      required: true,
      minLenght: 2,
      maxLenght: 15,
    },
    email: {
      required: true,
      email: true
    },
    password: {
      required: true,
      minLenght: 2,
      maxLenght: 15,
    },
    login: {
      required: true
    }
  },
  colorWrong: 'red',
  tooltip: {
    fadeOutTime: 4000,
    selectorWrap: '.form-tooltip'
  },
  messages: {
    text: {
      required: 'Ошибка'
    },
    checkbox: {
      required: 'Ошибка'
    },
    name: {
      required: 'Ошибка'
    },
    email: {
      required: 'Ошибка',
      email: 'Введите корректный e-mail' 
    },
    password: {
      required: 'Ошибка'
    }
  }
});