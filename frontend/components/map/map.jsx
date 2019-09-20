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
      interactive: this.props.interactive
    });

    let map = this.map;

    map.on('load', function () {
      map.addLayer({
        id: 'terrain-data',
        type: 'line',
        source: {
          type: 'vector',
          url: 'mapbox://mapbox.mapbox-terrain-v2'
        },
        'source-layer': 'contour'
      });
    })
  };



  handleClick() {
    this.props.history.location.pathname === "/feed" ?
      this.props.history.push(`/activity/${this.props.activity.id}`) :
      ""
  }

  render() {
    return (
      <div onClick={this.handleClick} id={this.props.container}></div>
    )
  }

};

export default withRouter(showMap);
