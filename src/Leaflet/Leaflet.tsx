import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import '../../src/index.css'
import L from 'leaflet';

export function Leaflet() {

  const isMobile = L.Browser.mobile; // Assuming L is imported and available in scope

  return (
    <div>
      <MapContainer
        center={[58.2230, 26.40100]}
        zoom={14}
        scrollWheelZoom={false}
        dragging={!isMobile} // Disable dragging on mobile devices
        touchZoom={true}
      >
        <TileLayer
          detectRetina={true}
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[58.21773, 26.39628]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
