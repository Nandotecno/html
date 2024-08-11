<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $lab = $_POST['lab'];
    $date = $_POST['date'];
    $time = $_POST['time'];

    // Aqui você pode adicionar lógica para armazenar os dados em um banco de dados
    // Exemplo: salvar em um arquivo ou em um banco de dados MySQL

    // Para fins de exemplo, apenas retornamos uma mensagem
    echo "Agendamento realizado com sucesso para $lab no dia $date às $time.";
}
?>