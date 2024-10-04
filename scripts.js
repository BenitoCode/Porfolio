const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}

function toggleCvDownload() {
    document.getElementById("popup-1").classList.toggle("active")
}
    

