import mapboxgl from 'mapbox-gl'

export const mapAddRoute = (map, coordinates) => {
  map.on('load', function () { // Adds a source to get coordinates from
    map.addSource('route', {
      'type': 'geojson',
      'data': {
        'type': 'Feature',
        'properties': {},
        'geometry': {
          'type': 'LineString',
          'coordinates': coordinates
        }
      }
    }); // add source
    map.addLayer({ // Adds coordinates to map with selected styling.
      'id': 'route',
      'type': 'line',
      'source': 'route',
      'layout': {
        'line-join': 'round',
        'line-cap': 'round'
      },
      'paint': {
        'line-color': '#b22121',
        'line-width': 3
      }
    }); // add layer
  }) // on load
}

export default mapAddRoute;