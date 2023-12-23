let btn = document.getElementById('scrollbtn');
window.onscroll=function(){
    if(scrollY>=400){
        btn.style.display='block';
    }else{
        btn.style.display='none';
    }
}
btn.onclick = function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
}
const progressContent = document.querySelector(".autoplay-progress ");
// const progressContent = document.querySelector(".autoplay-progress ");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

  on: {
    autoplayTimeLeft(s, time, progress) {
      progressContent.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 3,
  spaceBetween: 30,
  // pagination: {
  //   el: ".swiper-pagination1",
  //   clickable: true,
  // },
});
