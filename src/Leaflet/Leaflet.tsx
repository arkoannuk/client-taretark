import { createStyles, Container, rem } from '@mantine/core';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import '../../src/index.css'

const useStyles = createStyles((theme) => ({
  container: {
    // ... your other styles
  },
}));

export function Leaflet() {
  const { classes } = useStyles();

  return (

    <div>
      <MapContainer center={[58.2230, 26.40100]} zoom={14} scrollWheelZoom={false}>
        <TileLayer
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
