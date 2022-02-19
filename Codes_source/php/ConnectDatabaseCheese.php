<?php

    $host ='localhost';
    $dbname ='FromageAOC';
    $username ='postgres';
    $password ='postgres';

    $link = "pgsql:host=$host;port=5432;dbname=$dbname;user=$username;password=$password";
    try{

      $connexion = new PDO($link);

      if($connexion){
        #echo "Connecte à $dbname avec succes!";
      }
    }catch (PDOException $e){
      die('Erreur de connexion');#return $e-> getMessage();#echo $e->getMessage();
    }
?>
