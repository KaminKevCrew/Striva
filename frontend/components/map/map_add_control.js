import mapboxgl from 'mapbox-gl';


export const mapAddControl = (map) => {
  map.on('load', function () {
    // adds zoom/rotate map controls
    map.addControl(new mapboxgl.NavigationControl());
  }) // on load
}

export default mapAddControl;