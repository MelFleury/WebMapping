var Criano = document.getElementById('Criano');
var AOC = document.getElementById('AOC');
var nameAOC = document.getElementById('showAOC');

var groupeCri = new L.FeatureGroup();
var groupeAOC = new L.FeatureGroup();

fetch('../php/Criano.php')
.then(result => result.text())
.then(result => {
  document.getElementById('Criano').innerHTML = result;
  Criano.addEventListener('change', ITEMCRI);
  function ITEMCRI(){
    groupeCri.clearLayers();
    groupeAOC.clearLayers();
    itemCri = Criano.value;
    let dataCri = new FormData();
    dataCri.append('ItemCri', itemCri);
    fetch('../php/ItemCriano.php', {
      method: 'post',
      body: dataCri
    })
    .then(result => result.json())
    .then(result => {
    groupeCri.addLayer(L.geoJSON(JSON.parse(result.json_build_object),
    {
    onEachFeature: function (feature, layer) {
      layer.bindPopup('<h2>'+feature.properties.nom+'</h2><p><b>Code Insee:</b> '+feature.properties.insee+'</p><p><b>AOC de la commune:</b> '+feature.properties.AppellationDorigineControlee+'</p><p><b>Surface:</b> '+feature.properties.surf_ha+' ha</p>');
    }
  }
  )
  );
    mymap.addLayer(groupeCri);
  })
  }
  //groupeCri.addEventListener('click', InfoCri);
  // function InfoCri(){
  //   onEachFeature: function ()
  //   groupeCri.bindPopup('<h1>').openPopup();
  // }

})
result = Criano;


fetch('../php/AOC.php')
.then(result => result.text())
.then(result => {
  document.getElementById('AOC').innerHTML = result;//"<option value='toto' selected>bobo</option>";
  AOC.addEventListener('change', ITEMAOC);
  function ITEMAOC(){
    groupeCri.clearLayers();
    groupeAOC.clearLayers();
    itemAOC = AOC.value;
    let dataAOC = new FormData();
    dataAOC.append('ItemAOC', itemAOC);
    fetch('../php/ItemAOC.php', {
      method: 'post',
      body: dataAOC
    })
    .then(result => result.json())
    .then(result => {
    groupeAOC.addLayer(L.geoJSON(JSON.parse(result.json_build_object),
    {
    onEachFeature: function (feature, layer) {
      layer.bindPopup('<h2>'+feature.properties.nom+'</h2><p><b>Type de lait:</b> '+feature.properties.Lait+'</p><p><b>Région fromagère:</b> '+feature.properties.AireDeProduction+"</p><p><b>Année d'obtention de l'AOC:</b> "+feature.properties.AnneeDobtentionDeLAOC+'</p>');
    }
  })
  );
    mymap.addLayer(groupeAOC);
    nameAOC.textContent = AOC.value;

})
}
})
result = AOC;

//Initialisation de la map
const zoomLevelInit = 8
const View = {
  lat: 46.2792,
  long: 6.7228
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
