document.addEventListener("DOMContentLoaded", function(event) {
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
});