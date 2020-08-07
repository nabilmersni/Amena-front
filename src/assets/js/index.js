document.addEventListener("DOMContentLoaded", function(event) {
  //get the height of special-about-us__header-shape and set the height of special-about-us__header-shape-box
  
  window.onload = function(){
    var header_shape_height = document.querySelector('.special-about-us__header-shape').clientHeight;
    document.querySelector(".special-about-us__header-shape-box").style.height = header_shape_height + "px";
  
    window.onresize = function(){
      var header_shape_height = document.querySelector('.special-about-us__header-shape').clientHeight;
      document.querySelector(".special-about-us__header-shape-box").style.height = header_shape_height + "px";
  };
  };
  
  window.onresize = function(){
      var header_shape_height = document.querySelector('.special-about-us__header-shape').clientHeight;
      document.querySelector(".special-about-us__header-shape-box").style.height = header_shape_height + "px";
  };
  
  //get the height of special-about-us__header-shape and set the height of special-about-us__header-shape-box
  
  
  
  
  // navigation animation on scroll-----------------------------------------
  
  // Initial state
  var scrollPos = 0;
  
  // navigation element
  var navigation = document.querySelector(".navigation");
  var navigation_small = document.querySelector(".navigation-small");
  
  
  // adding scroll event
  window.addEventListener('scroll', function(){
    var input = document.querySelector(".navigation-small__input").checked;
    // detects new state and compares it with the new one
    if ((document.body.getBoundingClientRect()).top == 0){
      navigation.classList.add("navigation-scrolled-header");
      navigation.classList.remove("navigation-scrolled-up");
      navigation.classList.remove("navigation-scrolled-down");
  
      navigation_small.classList.add("navigation-scrolled-header");
      navigation_small.classList.remove("navigation-scrolled-up");
      navigation_small.classList.remove("navigation-scrolled-down");
    }
  
    else if ((document.body.getBoundingClientRect()).top > scrollPos) { //UP
      navigation.classList.add("navigation-scrolled-up");
      navigation.classList.remove("navigation-scrolled-header");
      navigation.classList.remove("navigation-scrolled-down");
  
      navigation_small.classList.add("navigation-scrolled-up");
      navigation_small.classList.remove("navigation-scrolled-header");
      navigation_small.classList.remove("navigation-scrolled-down");
    }
      else { //DOWN
          navigation.classList.add("navigation-scrolled-down");
          navigation.classList.remove("navigation-scrolled-header");
          navigation.classList.remove("navigation-scrolled-up");
  
          if(input == false){
  
            navigation_small.classList.add("navigation-scrolled-down");
            navigation_small.classList.remove("navigation-scrolled-header");
            navigation_small.classList.remove("navigation-scrolled-up");
          }
          
      }
    // saves the new position for iteration.
    scrollPos = (document.body.getBoundingClientRect()).top;
  });
  
  // navigation animation on scroll-----------------------------------------
  
  //nav list display----------------------------
  var list = document.querySelector(".navigation-small__list__container");
  var toggler = document.querySelector(".navigation-small__input");
  
  
  toggler.addEventListener("click" , function(event){
    list.classList.toggle("display-none");
  })
  
  //nav list display----------------------------
  
  //carousel card per view to show-----------------
  
  window.onresize = function(){
    var bodyWidth = document.body.clientWidth;
    var carousel = document.querySelector(".swiper-container");
    console.log(bodyWidth);
    
    if (bodyWidth <= 780) {
      carousel.classList.add("swiper-container-1");
      if (!(carousel.classList.contains("swiper-container-1"))) {
      }
    } else{
      carousel.classList.remove("swiper-container-1");
    }
  };
  
  //carousel card per view to show-----------------
  });