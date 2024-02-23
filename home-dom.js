function interruptor() {
    var body = document.body;
    var switchButton = document.getElementById('switch');

    // Cambia el fondo y oculta el gif al agregar o quitar la clase 'minimalista'
    body.classList.toggle('minimalista');

    // Cambia el texto del botón
    if (body.classList.contains('minimalista')) {
        switchButton.textContent = 'Modo Full';
    } else {
        switchButton.textContent = 'Minimalista Mode';
    }
    
    // Aquí puedes realizar otras acciones si es necesario
}