

(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  document.getElementById("contact").addEventListener("click", function(){
    document.querySelector(".mask").classList.add("is-visible");
    document.querySelector(".contact-form-mask").classList.add("is-visible");
  })
  document.getElementById("contact-main").addEventListener("click", function(){
    document.querySelector(".mask").classList.add("is-visible");
    document.querySelector(".contact-form-mask").classList.add("is-visible");
  })

  document.getElementById("close").addEventListener("click", function(){
    document.querySelector(".mask").classList.remove("is-visible");
    document.querySelector(".contact-form-mask").classList.remove("is-visible");
  })
document.getElementById("hamburger").addEventListener("click", function(){
  console.log("hi");
    document.querySelector(".hamburger-nav").classList.add("is-visible-hamburger");
  })
  document.getElementById("close-hamburguer").addEventListener("click", function(){
    document.querySelector(".mask").classList.remove("is-visible");
    document.querySelector(".hamburger-nav").classList.remove("is-visible-hamburger");
  })