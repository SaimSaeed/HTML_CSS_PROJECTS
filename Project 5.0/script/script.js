
// function slideshow(){
//     var x= document.querySelector("checkclass");   
//     if (x.style.display != "none"){
//         x.style.display="block";
//     }
//      else{
//         x.style.display="none";
//     }
// }
burger = document.querySelector(".burger");
navbar = document.querySelector(".nav");
navlist = document.querySelector(".mainnav");

burger.onclick=()=> {
    navlist.classList.toggle('v-resp');
    navbar.classList.toggle('h-nav-resp');

};