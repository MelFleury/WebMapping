<?php
//connexion à la base de donnée
include_once ('ConnectDatabaseCheese.php');

//REQUETE AOC POUR LE MENU DEROULANT 
$AOC = [];
$requeteAOC = 'SELECT a."AppellationDorigineControlee" FROM "AOC_HauteSavoie_geom" as a GROUP BY a."AppellationDorigineControlee";';
$result = $connexion -> query($requeteAOC);
while ($ligne = $result -> fetch()){

  #echo $ligne['AppellationDorigineControlee'];
  echo "<option value='".$ligne['AppellationDorigineControlee']."'>".$ligne['AppellationDorigineControlee']."</option>";

}
$result -> closeCursor();
?>
