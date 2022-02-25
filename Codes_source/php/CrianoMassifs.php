<?php
include_once ('ConnectDatabaseCheese.php');
//REQUETE CRIANO : "Massifs du Mont-Blanc, du Chablais, des Aravis et des Bauges"
$CrianoMassifs = 'SELECT json_build_object(\'type\', \'FeatureCollection\',\'features\', json_agg(ST_AsGeoJSON(t.*)::json)) FROM "AOC_HauteSavoie_geom" as t WHERE t."AireDeProduction" = \'Massifs du Mont-Blanc, du Chablais, des Aravis et des Bauges\';';
$result = $connexion->query($CrianoMassifs);
if ($result !== false){
  foreach($result as $row){
    echo json_encode($row);
    }
} else {
    echo 'The SQL query failed with error';
}
?>
