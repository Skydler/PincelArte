(function(){
//  ZOOM DE IMAGENES

  var modal = document.querySelector(".modal");

  var images = document.querySelectorAll(".picture");

  for(let img of images){
    img.querySelector("img").addEventListener("click", function() { // le asigno el evento click
    //se ejecuta el zoom de imagen
    modal.style.display = "block";
    modal.querySelector("img").src  = img.querySelector("img").src;
    modal.querySelector("div.description").innerHTML = img.querySelector("span").innerHTML;
    });
  } 

  var span = document.querySelector(".modal span");

  span.addEventListener("click", function() {
    modal.style.display = "none";
  });

  window.addEventListener("click", function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  });

  // BOTON DE SCROLL

  var galery = document.querySelector(".arrow img");

  galery.addEventListener("click", function() {
    document.querySelector("#galery").scrollIntoView({
    behavior: "smooth", block: "start" });
  });

  // MENU PARA CELULAR

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