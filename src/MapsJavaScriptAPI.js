

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: { lat: 35.717, lng: 139.731 },
    });
  }
  
  window.initMap = initMap;
  export default initMap;