function initMap() {
  var location = { lat: 40.7831, lng: -73.9712 };
  var map = new google.maps.Map(document.getElementById("google-map"), {
    zoom: 11,
    center: location,
  });
}
