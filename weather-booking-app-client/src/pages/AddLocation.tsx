import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, {
    GeolocateControl,
    Marker,
    NavigationControl,
  } from 'react-map-gl';
import { useValue } from '../../context/ContextProvider';
import { useEffect, useRef } from 'react';

const mapboxAPIToken = 'pk.eyJ1IjoibGVvbmFyZG9wcmFzZXR5bzUiLCJhIjoiY2xneHNjYjB4MDJnZDN2cXEzeGZ1YjR5MyJ9.nalIoKCttMHS_6NdVxo6DQ'
const AddLocation = () => {
  const location = {
    lng: -122.4,
    lat: 37.8,
  }
  // const mapRef = useRef()
  let lng = location["lng"]
  let lat = location["lat"]
  // useEffect(() => {
  //   if (!lng && !lat){
  //     fetch('https://ipapi.co/json').then((response) => {
  //       return response.json()
  //     }).then((data) => {
  //       lng = data.longitude
  //       lat = data.latitude
  //     })
  //   }
  // })
    return(
        <ReactMapGL 
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 14
        }}
        mapboxAccessToken={mapboxAPIToken}
        style={{width: 600, height: 400}}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        
        <NavigationControl position='bottom-right'/>

      </ReactMapGL>
    )
} 
export default AddLocation;