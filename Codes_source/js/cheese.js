var Criano = document.getElementById('Criano');

fetch('../php/Criano.php')
.then(result => result.text())
.then(result => {
  document.getElementById('Criano').innerHTML = result;//"<option value='toto' selected>bobo</option>";
  Criano.addEventListener('change', ITEMCRI);
  function ITEMCRI(){
    switch(Criano.value){
      case "Beaufortain, la Maurienne et la Tarentaise, une partie du Val d Arly":
      fetch('../php/CrianoBeaufortain.php')
      .then(result => result.json())
      .then(result => {
      console.log("HOLAAAAA");
      L.geoJSON(JSON.parse(result.json_build_object)).addTo(mymap);
      mymap.removeLayer(result);
    })
    break;
    case "Savoie et Haute-Savoie":
    fetch('../php/CrianoSavoieHteSavoie.php')
    .then(result => result.json())
    .then(result => {
    console.log("hello");
    L.geoJSON(JSON.parse(result.json_build_object)).addTo(mymap);
    mymap.removeLayer(result);
  })
    break;
    case "Val_Dabondance":
    fetch('../php/CrianoValDhab.php')
    .then(result => result.json())
    .then(result => {
    L.geoJSON(JSON.parse(result.json_build_object)).addTo(mymap);
    mymap.removeLayer(result);
    })
    break;
    case "Massifs du Mont-Blanc, du Chablais, des Aravis et des Bauges":
    fetch('../php/CrianoMassifs.php')
    .then(result => result.json())
    .then(result => {
    L.geoJSON(JSON.parse(result.json_build_object)).addTo(mymap);
    mymap.removeLayer(result);
    })
    break;

  }
}
})
result = Criano;

    // if (Criano.value == "Beaufortain, la Maurienne et la Tarentaise, une partie du Val d Arly"){
    //   fetch('../php/CrianoBeaufortain.php')
    //   .then(result => result.json())
    //   .then(result => {
    //     console.log("HOLAAAAA");
    //     L.geoJSON(JSON.parse(result.json_build_object)).addTo(mymap);
    //   })
    // } else if (Criano.value == "Savoie et Haute-Savoie") {
    //   fetch('../php/CrianoSavoieHteSavoie.php')
    //   .then(result => result.json())
    //   .then(result => {
    //     console.log("hello");
    //     console.log(result.json_build_object);
    //     L.geoJSON(JSON.parse(result.json_build_object)).addTo(mymap);
    //   })
    // } else if (Criano.value == "Val_Dabondance") {
    //   fetch('../php/CrianoValDhab.php')
    //   .then(result => result.json())
    //   .then(result => {
    //     L.geoJSON(JSON.parse(result.json_build_object)).addTo(mymap);
    //   })
    // } else {
    //   fetch('../php/CrianoMassifs.php')
    //   .then(result => result.json())
    //   .then(result => {
    //     L.geoJSON(JSON.parse(result.json_build_object)).addTo(mymap);
    //   })
    // }


fetch('../php/AOC.php')
.then(result => result.text())
.then(result => {
  document.getElementById('AOC').innerHTML = result;//"<option value='toto' selected>bobo</option>";
})
result = AOC;

// criano.addEventListener("change", itemCri);
// function itemCri(){
//   document.getElementById('criano').value = criano.value;
// }
//console.log(itemCri);

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


//   result = Geometry;
//
// ValDhab.addEventListener('click', onClick());
// function onClick(){
//   for (let i = 0; i <= Geometry.length; i++){
//     var PolygCommunes = L.polygon([
//       [Geometry]
//     ]).addTo(mymap);
//   }
// }
