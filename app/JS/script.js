
const btnHamburger = document.querySelector("#btnhamburger");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay")
const  fadeelems = document.querySelectorAll(".has-fade")
btnHamburger.addEventListener('click',function(){

if(header.classList.contains("open")){
    header.classList.remove('open')
    fadeelems.forEach(function (element) {
        element.classList.remove("fade-in")
        element.classList.add("fade-out") 
    })
    body.classList.remove('noScroll')

    
}
else{
    
    header.classList.add('open')
    fadeelems.forEach(function (element) {
        element.classList.remove("fade-out")
        element.classList.add("fade-in")
    })
    body.classList.add('noScroll')

    
}



})