//for thr swiper from swiper demos
var swiper = new Swiper(".popular-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    510: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    758: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },

});
let playButton=document.querySelector('.play-movie')
let video=document.querySelector('.video-container')
let myvideo=document.querySelector('#myvideo')
let closebtn = document.querySelector('.close-video')
playButton.onclick=()=>{
  video.classList.add("show-video");
  myvideo.play();
};
closebtn.onclick=()=>{
  video.classList.remove("show-video");
  myvideo.pause();
};
function display(result){
  const content= result.map((list)=>{
    return "<li onclick=selectInput>"+ list +"</li>";
  }
  );
  resultsBox.innerHTML =" <ul>"+content.join('')+"</ul>";
}
function selectInput(list){
  inputBox.value=list.innerHTML;
}