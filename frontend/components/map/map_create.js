import mapboxgl from 'mapbox-gl';

// Required parameters for mapCreate:
// container: the id of the container element that will house the map
// center: an array of length 2 deignating the coordinates for the center of map
// zoom: integer setting the initial zoom level
// interactive: boolean indicating whether the map should be static 

const mapAddControl = (map) => {
  map.on('load', function () {
    // adds zoom/rotate map controls
    map.addControl(new mapboxgl.NavigationControl());
  }) // on load
}

// export const mapCreate = (container = "map", center = [-122, 38], zoom = 9, interactive = false, bounds) => {
export const mapCreate = (container = "map", interactive = false, bounds) => {
  mapboxgl.accessToken = 'pk.eyJ1Ijoia2FtaW5rZXZjcmV3IiwiYSI6ImNrMGUydnoxbzBkbHgzY3IxOGZmcWN6dHAifQ.K2wzWQ-7KEhyUxXFR48aTA';
  // debugger
  let map = new mapboxgl.Map({// TODO: test for use with object
    container: container,
    style: 'mapbox://styles/mapbox/streets-v11',
    // center: center,
    // zoom: zoom,
    bounds: bounds,
    interactive: interactive
  });

  if (interactive) {
    mapAddControl(map);
  }
  return map
}

export default mapCreate;