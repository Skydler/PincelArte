(function(){
  var menu = document.querySelector("header .menu_icon");
  var side_nav = document.querySelector("header .nav_main");

  menu.addEventListener("click", function(event) {
    event.stopPropagation();
    side_nav.style.width = "170px";
  });

  window.addEventListener("click", function(event) {
    if ((event.target != side_nav) &&
        (event.target != menu)  && 
        (window.innerWidth <= 800)) {
        side_nav.style.width = "0px";
    }
  });
})(); 