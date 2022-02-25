<?php
include_once ('ConnectDatabaseCheese.php');
//REQUETE CRIANO POUR LE MENU DEROULANT
$requeteCriano = 'SELECT a."AireDeProduction" FROM "AOC_HauteSavoie_geom" as a GROUP BY a."AireDeProduction";';
$result = $connexion -> query($requeteCriano);
echo "<option value='Select'>Choisis une région fromagère</option>";
  while ($Ligne = $result -> fetch()){
    echo "<option value='".$Ligne['AireDeProduction']."'>".$Ligne['AireDeProduction']."</option>";
    }
$result -> closeCursor();
?>
