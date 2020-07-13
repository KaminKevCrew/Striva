import mapboxgl from 'mapbox-gl';

export const mapAddPopup = (map, data) => { // Adds a popup on click for a point of interest.
  let validSourceTypes = {
    "vector": "vector",
    "raster": "raster",
    "geojson": "geojson",
    "image": "image",
    "video": "video"
  }

  map.on('load', function () {
    map.addSource('places', data)
    map.addLayer({
      'id': 'places',
      'type': 'symbol',
      'source': 'places',
      'layout': {
        'icon-image': '{icon}-15',
        'icon-allow-overlap': true
      }
    });
    map.on('click', 'places', function (e) {
      var coordinates = e.features[0].geometry.coordinates.slice();
      var description = e.features[0].properties.description;

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', function () {
      map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', function () {
      map.getCanvas().style.cursor = '';
    });
  });
}

export default mapAddPopup;