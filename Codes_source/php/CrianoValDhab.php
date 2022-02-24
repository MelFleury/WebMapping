<?php
include_once ('ConnectDatabaseCheese.php');
//REQUETE CRIANO : "Val d'Abondance"
$CrianoValDhab = 'SELECT json_build_object(\'type\', \'FeatureCollection\',\'features\', json_agg(ST_AsGeoJSON(t.*)::json)) FROM "AOC_HauteSavoie_geom" as t;';
//$result = $connexion -> query($CrianoValDhab);
  //while ($ligne = $result->fetch()){
    $result = $connexion->query($CrianoValDhab);
    if ($result !== false){
      foreach($result as $row){
        echo json_encode($row);
      }
    } else {
      echo 'The SQL query failed with error';
    }
    //echo $result;
    //echo json_encode($ligne);
    //echo json_decode($ligne['st_asgeojson']);
    //echo json_encode(json_decode($ligne['st_asgeojson']) -> coordinates);
    //echo json_decode($ligne['st_asgeojson'])['coordinates'];
    //echo json_encode($ligne['st_asgeojson']);
    //print_r(array($ligne['st_asgeojson']));
    //print_r(array(json_encode($ligne))[0]);
    //echo $ligne."coordinates";
    //}
//$result -> closeCursor();
?>
