document.addEventListener("deviceready", onDeviceReady, false);

function getCoords() {
  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById("pos").innerHTML = document.getElementById("pos").innerHTML + "<br/>" + Date() + " : " + position.coords.latitude + "," +position.coords.longitude;
  });
}

function onDeviceReady() {
  var db = window.openDatabase("test", "1.0", "Test DB", 1000000);
  setInterval(function() {
    getCoords();
  }, 60000);
  getCoords();
}