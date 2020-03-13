<?php

    include('db-config.php');

    try {
        $conn = new PDO("mysql:host=$servername;dbname=virtualtourdev", $username, $password);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        // echo "connected successfully";
        }
    catch(PDOException $e)
        {
        echo "Connection failed: " . $e->getMessage();
        }

// table created + search query
// from but modified: w3schools php select data

        // echo "<div id='searchResults'>";
        echo "<ul>";
        echo "<li class='firstResults text'><h6>Search Results:</h6></li>";

        class TableRows extends RecursiveIteratorIterator {
            function __construct($it) {
                parent::__construct($it, self::LEAVES_ONLY);
            }

            function current() {
                return "<p>" . parent::current(). "</p>";
            }

            function beginChildren() {
                echo "<li class='results text'>";
            }

            function endChildren() {
                echo "</li>" . "\n";
            }
        }

        // variable made of searchInput element in html
        // (where search is typed)
        $search = $_GET["search"];
        // le query
        $stmt = $conn->prepare("SELECT DISTINCT Buildings.name FROM Buildings INNER JOIN BuildingJump on BuildingJump.BuildingId = Buildings.Id INNER JOIN BuildingTypes on BuildingTypes.Id= BuildingJump.TypeId WHERE Buildings.name LIKE '%' ? '%' OR BuildingTypes.Name LIKE '%' ? '%'");
        $stmt->execute(array($search, $search));


        // set the resulting array to associative
        $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
        foreach(new TableRows(new RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) {
            echo $v;
        }

        $conn = null;
        echo "</ul>";
        // echo "</div>";

?>
