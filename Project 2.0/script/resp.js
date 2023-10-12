burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
rightnav = document.querySelector(".rightnav");
navlist = document.querySelector(".nav-list");

burger.onclick = () => {
    rightnav.classList.toggle('v-resp');
    navlist.classList.toggle('v-resp');
    navbar.classList.toggle('h-nav-resp');

};
