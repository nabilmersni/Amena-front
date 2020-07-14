var swiper = new Swiper('.swiper-container', {
          
  grabCursor: true,
  centeredSlides: true,
  
  slidesPerView: '2',
  spaceBetween: 15,
  loop: true,
  coverflowEffect: {
    rotate: 10,
    stretch: 50,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  navigation: {
    nextEl: '.swiper-next-box',
    prevEl: '.swiper-prev-box',
  },
 
});


var swiper = new Swiper('.swiper-container-1', {
          
  grabCursor: true,
  centeredSlides: true,
  
  slidesPerView: '1',
  spaceBetween: 15,
  loop: true,
  coverflowEffect: {
    rotate: 10,
    stretch: 50,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  navigation: {
    nextEl: '.swiper-next-box',
    prevEl: '.swiper-prev-box',
  },
 
});












//carousel card per view to show-----------------
/*
window.onresize = function(){
  var bodyWidth = document.body.clientWidth;
  var carousel = document.querySelector(".swiper-container");
  var slidesPerView = 0;
  console.log(bodyWidth);
  if (bodyWidth <= 780) {
    
    var swiper = new Swiper('.swiper-container', {
          
      grabCursor: true,
      centeredSlides: true,
      
      slidesPerView: '1',
      spaceBetween: 15,
      coverflowEffect: {
        rotate: 10,
        stretch: 50,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      navigation: {
        nextEl: '.swiper-next-box',
        prevEl: '.swiper-prev-box',
      },
     
    });








  } else{
    var swiper = new Swiper('.swiper-container', {
          
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: '2',
      spaceBetween: 15,
      coverflowEffect: {
        rotate: 10,
        stretch: 50,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      navigation: {
        nextEl: '.swiper-next-box',
        prevEl: '.swiper-prev-box',
      },
     
    });
  }
};

*/
//carousel card per view to show-----------------
/*
var swiper = new Swiper('.swiper-container', {
          
          grabCursor: true,
          centeredSlides: true,
          loop: true,
          slidesPerView: '2',
          spaceBetween: 15,
          coverflowEffect: {
            rotate: 10,
            stretch: 50,
            depth: 100,
            modifier: 1,
            slideShadows : true,
          },
          navigation: {
            nextEl: '.swiper-next-box',
            prevEl: '.swiper-prev-box',
          },
         
        });
//---------------------------------------------------

var swiper = new Swiper('.swiper-container-1', {
          
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: '1',
  spaceBetween: 15,
  coverflowEffect: {
    rotate: 10,
    stretch: 50,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  navigation: {
    nextEl: '.swiper-next-box',
    prevEl: '.swiper-prev-box',
  },
 
});
        */