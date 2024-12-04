
document.getElementById('boton-mensaje').addEventListener('click', function() {
    alert('¡Bienvenido a la página de interactividad con JavaScript!');
});


document.getElementById('boton-cambiar').addEventListener('click', function() {
    const parrafo = document.getElementById('parrafo');
    parrafo.textContent = 'El contenido de este párrafo ha sido cambiado con éxito.';
});