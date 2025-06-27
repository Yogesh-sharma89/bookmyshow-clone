var swiper = new Swiper(".topSwiper", {
  spaceBetween: 30,
  centeredSlides: false,
  loop: true,
  speed: 700,
  autoplay: {
    delay: 2100,

    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


let nextbtns = document.querySelectorAll('.buttons .next-button');
console.log(nextbtns);


let prevBtns = document.querySelectorAll('.buttons .prev-button');


for (let nextbtn of nextbtns) {
  nextbtn.addEventListener("click", (e) => {
    const wrapper = e.target.closest('.wrapper');
    // console.log(wrapperSection);
    const slider1 = wrapper.querySelector('.card-slide-1');
    const slider2 = wrapper.querySelector('.card-slide-2');
    // console.log(slider1,slider2);
    slider1.classList.add('hato');
    slider2.classList.add('upar');
    const prevbtn = wrapper.querySelector('.prev-button');
    console.log(prevbtn, nextbtn);
    nextbtn.style.opacity = 0;
    prevbtn.style.opacity = 1;
  })
}


for (let prevBtn of prevBtns) {
  prevBtn.addEventListener("click", (e) => {

    const wrapper = e.target.closest('.wrapper');
    // console.log(wrapperSection);
    const slider1 = wrapper.querySelector('.card-slide-1');
    const slider2 = wrapper.querySelector('.card-slide-2');
    console.log(slider1, slider2);
    slider1.classList.remove('hato');
    slider2.classList.remove('upar');
    const nextBtn = wrapper.querySelector('.next-button');
    prevBtn.style.opacity = 0;
    nextBtn.style.opacity = 1;
  })
}


const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);



window.addEventListener('DOMContentLoaded', (e) => {
  let loader = document.querySelector('.loader');
  console.log(loader);
  setTimeout((e) => {
    loader.classList.add('niklo');
      window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
  }, 3455);
})





