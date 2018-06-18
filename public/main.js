
//para ver si el navegador admite geolocalizacion
if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(function(position){
console.log("localización: " +position.coords.latitude, position.coords.longitude);

let latitude = position.coords.latitude;
let longitude = position.coords.longitude;
let imagen = `http://maps.googleapis.com/maps/api/staticmap?markers=icon:%7C
${latitude},${longitude}&zoom=13&size=400x400&sensor=false`;
var elemento = document.createElement("img");
elemento.setAttribute('src', imagen);
let div= document.getElementById("#container");
document.body.insertBefore(elemento, div);

},function (err) {
    console.log(positions);
},{//el tiempo que tardará en alta precisión
    maximunAge: Infinity,
    timeOut: 10000,
    enableHighAccuracy: true
});
} else{
    alert ("La geolocalización no existe en tu navegador");
    
}
   
var watchID = navigator.geolocation.watchPosition(function(position){
    console.log(position)



    
}, function (err) {

},{
    maximunAge: Infinity,
    timeOut: 10000,
    enableHighAccuracy: true
}
    
)
console.log('watchID' , watchID);

//para eliminar el rastreo, parando la geolocalizacion

//navigator.geolocation.clearWatch(watchID);
//console.log ("watchID", watchID);

