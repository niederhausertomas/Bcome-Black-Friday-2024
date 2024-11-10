document.querySelector('.calculate').addEventListener('click', function() {

    const price = parseFloat(document.querySelectorAll('.input1')[0].value);
    const frequency = parseFloat(document.querySelectorAll('.input1')[1].value);


    if (!isNaN(price) && !isNaN(frequency) && frequency !== 0) {

        const result = (price / frequency).toFixed(2);


        const formattedResult = parseFloat(result).toLocaleString('es-ES', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });


        const resultElements = document.querySelectorAll('.result');
        resultElements.forEach(element => {
            element.textContent = `${formattedResult} €`;
        });


        document.querySelector('.inputContainer').style.display = 'none';
        document.querySelector('.resultContainer').style.display = 'block';
    }
});




document.querySelector('.try').addEventListener('click', function() {

    document.querySelectorAll('.input1')[0].value = '';
    document.querySelectorAll('.input1')[1].value = '';

    document.querySelector('.inputContainer').style.display = 'block';
    document.querySelector('.resultContainer').style.display = 'none';
});
