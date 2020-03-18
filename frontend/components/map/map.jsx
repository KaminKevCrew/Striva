import React from 'react'
import mapboxgl from 'mapbox-gl'

import { Link, withRouter } from 'react-router-dom'


class showMap extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      map: "",
    }
    this.mapAddPopup = this.mapAddPopup.bind(this);
    this.mapAddRoute = this.mapAddRoute.bind(this);
    this.mapAddStyle = this.mapAddStyle.bind(this);
    this.mapCreate = this.mapCreate.bind(this);
    this.mapBuilder = this.mapBuilder.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }

  mapAddPopup(map, data) { // Adds a popup on click for a point of interest.
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

  mapAddRoute(map, coordinates) {
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
          'line-color': '#888',
          'line-width': 8
        }
      }); // add layer
    }) // on load

  }

  mapAddStyle(map) {
    map.on('load', function () {
      // adds zoom/rotate map controls
      map.addControl(new mapboxgl.NavigationControl());
    }) // on load
  }

  mapCreate(container = "map", center = [-122, 38], zoom = 9, interactive = true) {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2FtaW5rZXZjcmV3IiwiYSI6ImNrMGUydnoxbzBkbHgzY3IxOGZmcWN6dHAifQ.K2wzWQ-7KEhyUxXFR48aTA';

    let map = new mapboxgl.Map({
      container: container,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: center,
      zoom: zoom,
      interactive: interactive
    });
    return map
  }

  mapBuilder(map) { // Adds each element to the map
    this.mapAddStyle(map);
    this.mapAddRoute(map, this.coordinates);
    this.mapAddPopup(map, this.data);
  }

  componentDidMount() {
    let map = this.mapCreate();
    this.mapBuilder(map);

  }

  handleClick() {
    this.props.history.location.pathname === "/feed" ?
      this.props.history.push(`/workout/${this.props.workout.id}`) :
      ""
  }

  render() {
    return (
      <div className='map-page'>
        <div onClick={this.handleClick} id='map'></div>
      </div>
      
    )
  }

};

export default withRouter(showMap);
