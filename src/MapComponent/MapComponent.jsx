import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "./Map.css";
import urlPic from "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

class MapComponent extends React.Component {
  state = {
    lat: 48.61802718296804,
    lng: 22.29856393445102,
  };

  render() {
    var center = [this.state.lat, this.state.lng];

    return (
      <MapContainer center={center} zoom={17} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={urlPic}
        />
        <Marker position={center}>
          <Popup>PrimaDent</Popup>
        </Marker>
      </MapContainer>
    );
  }
}

export default MapComponent;
