// setting the date.
const date = document.querySelector(".date-span");
date.innerHTML = new Date().getUTCFullYear();

// nav scroll event
const nav = document.getElementById("myNav");
let sticky = nav.offsetTop;
window.onscroll = function() {myFunc()};
function myFunc(){
    if(window.pageYOffset > sticky){nav.classList.add("show-nav");}
    else{nav.classList.remove("show-nav");}
};
