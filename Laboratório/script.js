document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const lab = document.getElementById('lab').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Envio dos dados para o PHP
    fetch('schedule.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `lab=${lab}&date=${date}&time=${time}`
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('message').innerText = data;
        document.getElementById('bookingForm').reset(); // Limpa o formulário
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});