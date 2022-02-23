<?php
include_once ('ConnectDatabaseCheese.php');
//REQUETE CRIANO : "Val d'Abondance"
$CrianoValDhab = 'SELECT ST_AsGeojson(wkb_geometry) FROM "AOC_HauteSavoie_geom";';
$result = $connexion -> query($CrianoValDhab);
  while ($ligne = $result -> fetch()){
    //print_r($ligne);
    echo json_encode($ligne);
    }

$result -> closeCursor();
?>
