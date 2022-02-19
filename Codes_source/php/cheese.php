<?php
//connexion à la base de donnée
include_once ('ConnectDatabaseCheese.php');


//REQUETE AOC
$AOC = [];
$requeteAOC = 'SELECT a."AppellationDorigineControlee" FROM "AOC_HauteSavoie_geom" as a GROUP BY a."AppellationDorigineControlee";';
$result = $connexion -> query($requeteAOC);
while ($ligne = $result -> fetch()){

  #echo $ligne['AppellationDorigineControlee'];
  echo "<option value='".$ligne['AppellationDorigineControlee']."'>".$ligne['AppellationDorigineControlee']."</option>";

}
$result -> closeCursor();
?>

<?php
//REQUETE CRIANO
$requeteCriano = 'SELECT a."AireDeProduction" FROM "AOC_HauteSavoie_geom" as a GROUP BY a."AireDeProduction";';
$result = $connexion -> query($requeteCriano);
  while ($Ligne = $result -> fetch()){

    echo "<option value='".$ligne['AireDeProduction']."'>".$ligne['AireDeProduction']."</option>";
    }
$result -> closeCursor();
?>
