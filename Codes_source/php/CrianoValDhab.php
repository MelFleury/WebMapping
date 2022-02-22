<?php
include_once ('ConnectDatabaseCheese.php');
//REQUETE CRIANO : "Val d'Abondance"
$CrianoValDhab = "SELECT wkb_geometry FROM AOC_HauteSavoie_geom WHERE AireDeProduction = 'Val_Dabondance'";
$result = $connexion -> query($CrianoValDhab);
  while ($ligne = $result -> fetch()){
    echo $ligne;
    }
$result -> closeCursor();
?>
