document.addEventListener('DOMContentLoaded', function() {
    let seleccionar = document.querySelector('select');
    let parrafo = document.querySelector('p');

    seleccionar.addEventListener('change', establecerTipo);

    function establecerTipo() {
        let eleccion = seleccionar.value;

        if (eleccion === 'basico') {
            parrafo.textContent = "Básico: 500$";
        } else if (eleccion === "intermedio") {
            parrafo.textContent = 'Intermedio: 1000$';
        } else if (eleccion === 'premium') {
            parrafo.textContent = 'Premium: 1500$';
        } else if (eleccion === 'elija')  {
            parrafo.textContent = ' ';

        } else {
            parrafo.textContent = '';
        }
    }
});
