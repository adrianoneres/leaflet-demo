var map = L.map('map').setView([-15.408, -55.832], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var circleMarker = L.circleMarker([-15.408, -55.832], {
  radius: 4,
  color: '#ff0000'
}).addTo(map);