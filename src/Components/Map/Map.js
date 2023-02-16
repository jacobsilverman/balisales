import React, { useMemo, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({longitudeLatitude}) => {
    const [initial, setInitial] = useState(true);
    const mapStyles = {
        height: "230px",
        width: "280px"
    };

    const render = useMemo(() => {
        if (initial) {
            setInitial(false);
            return
        }
        return (
            <LoadScript
                googleMapsApiKey='AIzaSyDwxyCrcshK6kl2ICi5UCtepIqNgPz36T4'>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={10}
                    center={longitudeLatitude}>
                        <Marker position={longitudeLatitude} />
                </GoogleMap>
            </LoadScript>
        )
    }, [longitudeLatitude]);

    return render;
}

export default Map;