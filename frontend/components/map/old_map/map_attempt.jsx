import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoia2FtaW5rZXZjcmV3IiwiYSI6ImNrMHNlbXRpdjAxd3ozbXFnNWNidnQ4cHkifQ.tRPQTLC7vIb0D9i5Hph3xA';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });
  }

  render() {
    return (
      <div>
        <div ref={el => this.mapContainer = el} className="mapContainer"/>
      </div>
    )
  }
}

export default withRouter(Map);