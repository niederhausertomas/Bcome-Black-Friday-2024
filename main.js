document.querySelector('.calculate').addEventListener('click', function() {
    // Obtener los valores de los inputs
    const price = parseFloat(document.querySelectorAll('.input1')[0].value);
    const frequency = parseFloat(document.querySelectorAll('.input1')[1].value);

    // Verificar que ambos valores sean números válidos y que la frecuencia no sea cero
    if (!isNaN(price) && !isNaN(frequency) && frequency !== 0) {
        // Calcular el resultado de la división
        const result = (price / frequency).toFixed(2);

        // Seleccionar todos los elementos con la clase .result y actualizar su contenido
        const resultElements = document.querySelectorAll('.result');
        resultElements.forEach(element => {
            element.textContent = `${result} €`;
        });

        // Mostrar el contenedor de resultados y ocultar el contenedor de inputs
        document.querySelector('.inputContainer').style.display = 'none';
        document.querySelector('.resultContainer').style.display = 'block';
    } else {
        // Mostrar un mensaje de error si hay valores no válidos
        alert('Por favor ingresa números válidos y asegúrate de que la frecuencia no sea cero.');
    }
});
