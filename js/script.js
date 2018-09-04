var button = document.querySelector(".popup-open");
var popup = document.querySelector(".contact-us");
var close = popup.querySelector(".form-close");
var name = popup.querySelector("#contact-name");


button.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.add("popup-show");
   name.focus();
  });

  close.addEventListener("click", function (evt) {
     evt.preventDefault();
     popup.classList.remove("popup-show");
   });

   window.addEventListener("keydown", function (evt) {
       if (evt.keyCode === 27) {
         evt.preventDefault();
         if (popup.classList.contains("popup-show")) {
           popup.classList.remove("popup-show");
         }
       }
     });
