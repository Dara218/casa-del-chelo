initMap();

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 14.101080, lng: 120.928570 },
        zoom: 14 // You can adjust the zoom level
    });
}

Fancybox.bind("[data-fancybox='casa-gallery']", {
  // Your custom options
});