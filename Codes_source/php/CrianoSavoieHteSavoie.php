<?php
include_once ('ConnectDatabaseCheese.php');
//REQUETE CRIANO : "Savoie et Haute Savoie"
$CrianoSavHte = 'SELECT json_build_object(\'type\', \'FeatureCollection\',\'features\', json_agg(ST_AsGeoJSON(t.*)::json)) FROM "AOC_HauteSavoie_geom" as t WHERE t."AireDeProduction" = \'Savoie et Haute-Savoie\';';
$result = $connexion->query($CrianoSavHte);
if ($result !== false){
  foreach($result as $row){
    echo json_encode($row);
  }
} else {
    echo 'The SQL query failed with error';
}
?>
