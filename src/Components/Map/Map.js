/*global google*/
import React, { useEffect, useMemo, useState } from 'react';
import { GoogleMap, Marker, OverlayView } from '@react-google-maps/api';
import { getLongitudeLatitude } from '../../Data/Services/geocode';
import defaultProfile from "../../Data/Images/default-profile.jpg"

import "./Map.scss";

const Map = ({addresses, width, height, zoom}) => {
    const [initial, setInitial] = useState(true);
    const [longitudeLatitude, setLongitudeLatitude] = useState([]);
    const [userHovered, setUserHovered] = useState({show: false, position: {}});
 
    const mapStyles = {
        height: height,
        width: width
    };

    const getPixelPositionOffset = (width, height) => ({
        x: -(width / 2),
        y: -(height / 2),
    })


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
                center={{lat: 38.1355772, lng: -96.135829}}>
                    {longitudeLatitude.map((position) => {
                        return (<>
                            <Marker 
                                position={position} 
                                icon={{url: defaultProfile, scaledSize: new google.maps.Size(25, 25)}} 
                                onMouseOver={() => {
                                    setUserHovered({show: true, position: position})
                                }}
                                onMouseOut={() => {
                                    setUserHovered({show: false, position: {}})
                                }}>
                                
                            </Marker>
                            {userHovered?.show && <OverlayView
                                position={userHovered?.position}
                                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                                getPixelPositionOffset={getPixelPositionOffset}>
                                <div className="info-window-container">
                                    <div>user</div>
                                    <button>
                                        profile
                                    </button>
                                </div>
                            </OverlayView>}
                        </>
                        );
                    })}
            </GoogleMap>
        )
    }, [longitudeLatitude, userHovered]);

    return render;
}

export default Map;