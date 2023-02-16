import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = () => {
    const mapStyles = {
        height: "230px",
        width: "280px"
    };
  
    const defaultCenter = {
        lat: 41.3851, lng: 2.1734
    }
  
    return (
        <LoadScript
            googleMapsApiKey='AIzaSyDwxyCrcshK6kl2ICi5UCtepIqNgPz36T4'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
            />
        </LoadScript>
    )
}
export default Map;