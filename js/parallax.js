let image = document.getElementsByClassName('espacios');
console.log(image);

function parallaxEspacios(){
  for (let i = 0; i < image.length; i++) {
    if(window.matchMedia("(min-width: 0px) and (max-width: 992px)").matches){
    console.log(image[i]);
    }else if (window.matchMedia("(min-width: 992px)").matches) {
      image[i].classList.add("thumbnail");
      console.log(image[i]);
      new simpleParallax(image[i], {
        overflow: true,
        scale: 1.5,
        delay: .6,
        transition: 'cubic-bezier(0,0,0,1)'
      })
    }else {
      image[i].classList.remove("thumbnail");
    }
  }   
};
parallaxEspacios();


$(function () {
  
  var controller = new ScrollMagic.Controller();
  var horizontalSlide = new TimelineMax()
  .to("#js-slideContainer", 1,   {x: "-20%"}) 
  .to("#js-slideContainer", 1,   {x: "-40%"})
  .to("#js-slideContainer", 1,   {x: "-60%"})
  .to("#js-slideContainer", 1,   {x: "-80%"})

  new ScrollMagic.Scene({
    triggerElement: "#js-wrapper",
    triggerHook: "onLeave",
    duration: "400%"
  })
  .setPin("#js-wrapper")
  .setTween(horizontalSlide)
  .addTo(controller);
  
});

