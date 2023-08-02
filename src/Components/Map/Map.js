/*global google*/
import React, { useEffect, useMemo, useState } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { getLongitudeLatitude } from '../../Data/Services/geocode';

import defaultProfile from "../../Data/Images/default-profile.jpg"

const Map = ({addresses, width, height, zoom}) => {
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
        setLongitudeLatitude([]);
        for (let index in addresses) {
            if (addresses[index]?.address && addresses[index]?.city){
                const location = `${addresses[index]?.address} ${addresses[index]?.unit} ${addresses[index]?.city} ${addresses[index]?.state} ${addresses[index]?.country} ${addresses[index]?.zipcode}`;
                getLongitudeLatitude(location).then((result) => {
                    setLongitudeLatitude(cur => [result, ...cur]);
                });
            }
        }
    }, [addresses]);

    const render = useMemo(() => {
        if (initial) {
            setInitial(false);
            return
        }
        return (
            <GoogleMap
                icon="here"
                mapContainerStyle={mapStyles}
                zoom={zoom}
                center={longitudeLatitude[0]}>
                    {longitudeLatitude.map((position) => {
                        return (
                            <Marker 
                                position={position} 
                                icon={{url: defaultProfile, scaledSize: new google.maps.Size(25, 25)}} 
                                onMouseOver={(e) => {
                                    alert(JSON.stringify(e))
                                }} >
                            </Marker>
                        );
                    })}
            </GoogleMap>
        )
    }, [longitudeLatitude]);

    return render;
}

export default Map;