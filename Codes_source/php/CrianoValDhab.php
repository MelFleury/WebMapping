<?php
include_once ('ConnectDatabaseCheese.php');
//REQUETE CRIANO : "Val d'Abondance"
$CrianoValDhab = 'SELECT a."wkb_geometry" FROM "AOC_HauteSavoie_geom" as a WHERE a."AireDeProduction" = "Val_Dabondance_(Haute-Savoie)";';
$result = $connexion -> query($CrianoValDhab);
  while ($ligne = $result -> fetch()){
    echo "<option value='".$ligne['wkb_geometry']."'>".$ligne['wkb_geometry']."</option>";
    }
$result -> closeCursor();
?>
