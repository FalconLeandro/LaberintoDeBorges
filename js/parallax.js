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


