document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('title');
    const loginBtn = document.getElementById('loginBtn');

    // Evento de rotación al pasar el ratón
    title.addEventListener('mouseenter', function() {
        this.classList.add('rotating');
    });

    // Remover la clase de animación cuando termina
    title.addEventListener('animationend', function() {
        this.classList.remove('rotating');
    });

    // Evento del botón de login (por ahora solo muestra un alert)
    loginBtn.addEventListener('click', function() {
        console.log('Botón de login presionado');
        // Aquí irá la redirección al formulario de login en versiones futuras
        alert('Funcionalidad de login próximamente');
    });

    // Log de bienvenida
    console.log('Aplicación cargada correctamente');
});