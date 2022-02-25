<?php
include_once ('ConnectDatabaseCheese.php');
//REQUETE CRIANO : "Val d'Abondance"
$CrianoValDhab = 'SELECT json_build_object(\'type\', \'FeatureCollection\',\'features\', json_agg(ST_AsGeoJSON(t.*)::json)) FROM "AOC_HauteSavoie_geom" as t WHERE t."AireDeProduction" = \'Val_Dabondance\';';
$result = $connexion->query($CrianoValDhab);
if ($result !== false){
  foreach($result as $row){
    echo json_encode($row);
    }
} else {
    echo 'The SQL query failed with error';
}  
?>
