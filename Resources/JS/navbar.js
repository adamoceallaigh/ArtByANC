function myFunction(x){
    var sidebar = document.getElementsByClassName("smaller_container")[0];
    var hamburger_menu = document.getElementsByClassName("hamburger_container")[0];
    x.classList.toggle("change");
    x.classList.toggle("open");
    hamburger_menu.classList.toggle("open");
    sidebar.classList.toggle("open");
}