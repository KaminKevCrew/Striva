import React from 'react'
import mapboxgl from 'mapbox-gl'

import { Link, withRouter } from 'react-router-dom'


class showMap extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      map: "",
    }

    this.handleClick = this.handleClick.bind(this)


  }

  componentDidMount() {
    let zoom = 9
    const center = [-122.401199, 37.798845]

    mapboxgl.accessToken = 'pk.eyJ1Ijoia2FtaW5rZXZjcmV3IiwiYSI6ImNrMHNlbXRpdjAxd3ozbXFnNWNidnQ4cHkifQ.tRPQTLC7vIb0D9i5Hph3xA';

    this.map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/mapbox/streets-v11',
      center: center, 
      zoom: zoom,
      interactive: true
    });

    let map = this.map;

    map.on('load', function () {
      map.addLayer({
        id: 'rpd_parks',
        type: 'fill',
        source: {
          type: 'vector',
          url: 'mapbox://mapbox.3o7ubwm8'
        },
        'source-layer': 'RPD_Parks',
        layout: {
          visibility: 'visible'
        },
        paint: {
          'fill-color': 'rgba(61,153,80,0.55)'
        }
      });
    })
  };



  handleClick() {
    this.props.history.location.pathname === "/feed" ?
      this.props.history.push(`/workout/${this.props.workout.id}`) :
      ""
  }

  render() {
    return (
      <div onClick={this.handleClick} id={this.props.container}></div>
    )
  }

};

export default withRouter(showMap);
