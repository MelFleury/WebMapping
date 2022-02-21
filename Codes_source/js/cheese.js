// Récupération des variables des menus de sélection
var criano = document.getElementById('criano');
var AOC = document.getElementById('AOC');


fetch('../php/Criano.php')//connexion à la BD "FromageAOC" contenue dans le fichier php
.then(result => result.text())
.then(result => {
  console.log(result);
  document.getElementById('criano').innerHTML = result;//"<option value='toto' selected>bobo</option>";
})
result = criano;

fetch('../php/AOC.php')//connexion à la BD "FromageAOC" contenue dans le fichier php
.then(result => result.text())
.then(result => {
  console.log(result);
  document.getElementById('AOC').innerHTML = result;//"<option value='toto' selected>bobo</option>";
})
result = AOC;

//Initialisation de la map
const zoomLevelInit = 13
const View = {
  lat: 46.9164118,
  long: 2.940072
}
var mymap = L.map('map').setView([View.lat, View.long],zoomLevelInit);
const mainLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      minZoom: 3,
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoibWVsb2RpZTE0NzEwIiwiYSI6ImNrdzJvZ3hhaWR3dTIybnM3ZDloZ2RpZTMifQ.5XOCx1H1VU-NURE8nTBPxg'});
  mainLayer.addTo(mymap);
