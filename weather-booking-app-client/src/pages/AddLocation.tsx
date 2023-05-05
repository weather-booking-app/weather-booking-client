import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, {
    GeolocateControl,
    Marker,
    NavigationControl,
    ViewState,
  } from 'react-map-gl';
import { IonSearchbar } from '@ionic/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import GeocoderControl from './geocoder-control';

const mapboxAPIToken = 'pk.eyJ1IjoibGVvbmFyZG9wcmFzZXR5bzUiLCJhIjoiY2xneHNjYjB4MDJnZDN2cXEzeGZ1YjR5MyJ9.nalIoKCttMHS_6NdVxo6DQ'


export default function AddLocation() {
  const mapContainer = useRef<any>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(144.946457);
  const [lat, setLat] = useState(-37.840935); 
  const [zoom, setZoom] = useState(14);

  
  const [viewport, setViewState] = useState({
    latitude: lat,
    longitude: lng,
    zoom: zoom,
    // bearing: 0,
    // pitch: 0,
    // padding: {top: 10, bottom:25, left: 15, right: 5}
  });

  return(
    <>
      <IonSearchbar placeholder='Search Location'></IonSearchbar>
      <ReactMapGL 
      initialViewState={{
        latitude: lat,
        longitude: lng,
        zoom: zoom
        }
      }
      //ref={map}
      mapboxAccessToken={mapboxAPIToken}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      style={{width: "50vw", height: "50vh"}}
    >
      <GeocoderControl mapboxAccessToken={mapboxAPIToken} position="top-left"/>
      <NavigationControl position='bottom-right'/>

    </ReactMapGL>
    </>
  )
} 
