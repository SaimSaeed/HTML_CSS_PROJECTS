
 
burger = document.querySelector(".burger");
navbar = document.querySelector(".headermenu");
rightnav = document.querySelector("v-resp");
navlist = document.querySelector("menulist");

burger.onclick = () => {
    rightnav.classList.toggle('v-resp');
    navlist.classList.toggle('v-resp');
    navbar.classList.toggle('h-nav-resp');

};

