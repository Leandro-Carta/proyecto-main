document.addEventListener("DOMContentLoaded", function() {
    var currentIndex = 0;
    var images = document.querySelectorAll(".Certificados"); // Cambiado el selector para que coincida con la clase de las imágenes
  
    // Función para mostrar la siguiente imagen en el carrusel
    function showNextImage() {
      // Ocultar la imagen actual
      images[currentIndex].classList.remove("show");
  
      // Obtener el índice de la siguiente imagen en el carrusel
      currentIndex = (currentIndex + 1) % images.length;
  
      // Mostrar la siguiente imagen
      images[currentIndex].classList.add("show");
    }
  
    // Inicializar el carrusel mostrando la primera imagen y configurando el evento de clic
    function initCarousel() {
      images[currentIndex].classList.add("show"); // Mostrar la primera imagen
      images[currentIndex].addEventListener("click", showNextImage); // Agregar evento de clic para mostrar la siguiente imagen
    }
  
    initCarousel(); // Iniciar el carrusel al cargar la página
  });