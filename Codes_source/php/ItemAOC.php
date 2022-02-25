<?php
include_once ('ConnectDatabaseCheese.php');
$itemAOC = $_POST['ItemAOC'];
//REQUETE AOC
$RequeteAOC = "SELECT json_build_object('type', 'FeatureCollection','features', json_agg(ST_AsGeoJSON(t.*)::json)) FROM \"AOC_HauteSavoie_geom\" as t WHERE t.\"AppellationDorigineControlee\" = '$itemAOC';";
$result = $connexion->query($RequeteAOC);
if ($result !== false){
  foreach($result as $row){
    echo json_encode($row);
    }
} else {
    echo 'The SQL query failed with error';
}
?>
