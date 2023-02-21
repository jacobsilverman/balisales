import React, { useEffect, useMemo, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { getLongitudeLatitude } from '../../Data/Services/geocode';

const Map = ({address, width, height}) => {
    const [initial, setInitial] = useState(true);
    const [longitudeLatitude, setLongitudeLatitude] = useState([]);

    const mapStyles = {
        height: height,
        width: width
    };

    useEffect(() => {
        if (initial) {
            setInitial(false);
            return;
        }
        if (address?.address && address?.city){
            const location = `${address?.address} ${address?.unit} ${address?.city} ${address?.state} ${address?.country} ${address?.zipcode}`;
            getLongitudeLatitude(location).then((result) => {
                setLongitudeLatitude(result);
            });
        }
    }, [address]);

    const render = useMemo(() => {
        if (initial) {
            setInitial(false);
            return
        }

        return (

                <GoogleMap
                    icon="here"
                    mapContainerStyle={mapStyles}
                    zoom={10}
                    center={longitudeLatitude}>
                        <Marker key="5" position={longitudeLatitude} />
                </GoogleMap>
        )
    }, [longitudeLatitude]);

    return render;
}

export default Map;