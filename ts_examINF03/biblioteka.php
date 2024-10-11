<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Biblioteka</title>
</head>
<body>
    <div class="header">
        <h1>Biblioteka w Książkowicach Małych</h1>
    </div>
    <div class="container">
        <div class="left">
            <h4>Dodaj czytelnika</h4>
            <form method="POST">
                <label>imię;</label>
                <input class="soska" type="text" name="name"></br>
                <label>nazwisko;</label>
                <input class="soska" type="text" name="surname"></br>
                <label>symbol;</label>
                <input class="soska" type="text" name="symbol"></br>
                <input class="soska" type="sumbit" name="sub" value="AKCEPTUJ">
                <?php
                    $conn = mysqli_connect('localhost', 'root', '', 'biblioteka');

                    $result = $conn -> query("INSERT INTO `czytelnicy`(`id`, `imie`, `nazwisko`, `kod`) VALUES (']','Ewelina','Romanowska','56677');");
                    foreach($result as $bruh){
                        echo('Dodano!');
                    }
                ?>
            </form>
        </div>
        <div class="center">
            <img src="biblioteka.png" alt="biblioteka">
            <h6>ul. </br> Czytelników 15; </br>Książkowice Małe</h6>
            <p><a href="biuro@bib.pl">Czy masz jakieś uwagi?</a></p>
        </div>
        <div class="right">
            <h4>Nasi czytelnicy:</h4>
            <ul>
            <?php
                $result = $conn -> query('SELECT imie, nazwisko From `czytelnicy` order by nazwisko asc;');
                foreach($result as $bruh){
                    echo("<li>".$bruh['imie']." ".$bruh['nazwisko']."</li>");
                };
            ?>
            </ul>

        </div>
    </div>
    <div class="footer">
        <p>Projekt witryny: </p>
    </div>
</body>
</html>