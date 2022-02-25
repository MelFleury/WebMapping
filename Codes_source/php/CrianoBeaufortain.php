<?php
include_once ('ConnectDatabaseCheese.php');
//REQUETE CRIANO : "Beaufortain, la Maurienne et la Tarentaise, une partie du Val d"Arly (Savoie et Haute-Savoie)"
$CrianoBeaufortain = 'SELECT json_build_object(\'type\', \'FeatureCollection\',\'features\', json_agg(ST_AsGeoJSON(t.*)::json)) FROM "AOC_HauteSavoie_geom" as t WHERE t."AireDeProduction" = \'Beaufortain, la Maurienne et la Tarentaise, une partie du Val d Arly\';';
$result = $connexion->query($CrianoBeaufortain);
if ($result !== false){
  foreach($result as $row){
    echo json_encode($row);
    }
} else {
    echo 'The SQL query failed with error';
}
?>
