burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
upnav= document.querySelector(".logo")
navlist = document.querySelector(".menu");

burger.onclick = () => {
    upnav.classList.toggle('v-resp');
    navlist.classList.toggle('v-resp');
    navbar.classList.toggle('h-nav-resp');

};
