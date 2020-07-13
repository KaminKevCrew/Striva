import React from "react";
import mapboxgl from 'mapbox-gl';
import mapCreate from './map_create';
import mapAddPopup from './map_add_popup';
import mapAddRoute from './map_add_route';

// Optional Props:
// container = "elementID" //=> default = "map"
// center = [lon, lat] //=> default = [-122, 38]
// zoom = int //=> default = 9 
// interactive = bool //=> default = false
// coordinates = [geoJSON coordinates] //=> if none given, skip
// data = {object for popup data} //=> if none given, skip

// TODO: Consider rendering every 3rd or 4th coordinate on a gpx file to improve performance.
// NOTE: I found that two .gpx points can be as close as 7ft apart

// TODO: investigate tracking of cursor over route, as well as how expanding this component would work for route creation (might be easiest to develop a new component specifically for route creation.)

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.mapBuildOptions = {
      container: this.props.container,
      // this.props.center,
      // this.props.zoom,
      interactive: this.props.interactive,
      // this.props.bounds,
      // this.setBounds()
    }
    // debugger
    this.mLO = {
      coords: this.props.coordinates,
      data: this.props.data
    }
    this.setBounds = this.setBounds.bind(this)
  } 

  setBounds() {
    // debugger
    let westSouth = [this.props.bounds[0], this.props.bounds[1]]
    let eastNorth = [this.props.bounds[2], this.props.bounds[3]]
    let bounds = new mapboxgl.LngLatBounds(westSouth, eastNorth)
    // debugger
    // let bounds = new mapboxgl.LngLatBounds([0, 0], [10, 10])
    this.mapBuildOptions["bounds"] = bounds
  }
  
  mapAddLayers(map) { // Adds each element to the map
    this.setBounds();
    this.props.coordinates ? mapAddRoute(map, this.mLO.coords) : false;
    this.props.data ? mapAddPopup(map, this.mLO.data) : false;
  }
  
  componentDidMount() {
    let container = this.mapBuildOptions.container
    // debugger
    let interactive = this.mapBuildOptions.interactive
    let bounds = this.mapBuildOptions.bounds
    let map = mapCreate(container, interactive, bounds); 
    this.mapAddLayers(map);
    map.fitBounds(this.mapBuildOptions["bounds"]) // assigns map size
    // debugger
  }

  render() {
    return (
      <div id={this.mapBuildOptions.container} className="map"></div>
    );
  }
}

export default Map;