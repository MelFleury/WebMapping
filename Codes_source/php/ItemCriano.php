<?php
include_once ('ConnectDatabaseCheese.php');
$itemCri = $_POST['ItemCri'];
//REQUETE CRIANO
$RequeteCri = "SELECT json_build_object('type', 'FeatureCollection','features', json_agg(ST_AsGeoJSON(t.*)::json)) FROM \"AOC_HauteSavoie_geom\" as t WHERE t.\"AireDeProduction\" = '$itemCri';";
$result = $connexion->query($RequeteCri);
if ($result !== false){
  foreach($result as $row){
    echo json_encode($row);
    }
} else {
    echo 'The SQL query failed with error';
}
?>
