import { useRef, useState } from 'react';
import marker from '../../assets/Img/marker.png';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import osmProviders from './osm-providers';
import "leaflet/dist/leaflet.css"
import { Icon } from 'leaflet'
const myIcon = new Icon({
 iconUrl: marker,
 iconSize: [32,32]
})
const Leaflet  = () => {

const[mapCenter ,setmapCenter] = useState({lat : 9.035890 , lng: 38.839938})
const zoomLevel = 16;
const mapRef = useRef();
    return ( 
        <div> 
          <MapContainer
        style={{ height: "400px" }}
        center={mapCenter}
        zoom={zoomLevel}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution={osmProviders.maptiler.attribution}
          url={osmProviders.maptiler.url}
        />
        <Marker position={mapCenter} icon={myIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      </div>
     );
}
 
export default Leaflet;