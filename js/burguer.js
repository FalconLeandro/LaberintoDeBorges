/*INICIO Logica para crear la cruz del menu burguer*/
const burguer = document.querySelector(".btn");
const linea1 = document.querySelector(".linea1");
const linea2 = document.querySelector(".linea2");
const linea3 = document.querySelector(".linea3");
const menu = document.querySelector(".menu");

burguer.addEventListener("click", lineaAnimada);
menu.addEventListener("click", lineaAnimada);

function lineaAnimada(){
    linea1.classList.toggle("linea1active");
    linea2.classList.toggle("linea2active");
    linea3.classList.toggle("linea3active");
    document.body.classList.toggle("scroll-none");
    menu.classList.toggle("colapse");
}
/*FIN Logica para crear la cruz del menu burguer*/