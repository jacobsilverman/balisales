/*global google*/
import React, { useEffect, useRef, useState } from 'react';
import { GoogleMap, Marker, OverlayView } from '@react-google-maps/api';
import { getLongitudeLatitude } from '../../Data/Services/geocode';
import defaultProfile from "../../Data/Images/default-profile.jpg"

import "./Map.scss";

const Map = ({addresses, width, height, zoom, center={lat: 38.1355772, lng: -96.135829}}) => {
    const initial = useRef(true);
    const [parsedUserData, setParsedUserData] = useState([]);
    const [userHovered, setUserHovered] = useState({show: false, position: {}});
    const c = addresses.length === 1 ? true : false;
    const mapStyles = {
        height: height,
        width: width
    };

    const getPixelPositionOffset = (width, height) => ({
        x: -(width / 2),
        y: -(height / 2),
    })

    useEffect(() => {
        console.log("render")
        if (initial.current) {
            initial.current = false;
            return;
        }
        setParsedUserData([]);
        for (let index in addresses) {
            if (addresses[index]?.address && addresses[index]?.city){
                const location = `${addresses[index]?.address} ${addresses[index]?.unit} ${addresses[index]?.city} ${addresses[index]?.state} ${addresses[index]?.country} ${addresses[index]?.zipcode}`;
                getLongitudeLatitude(location).then((result) => {
                    const newData = {
                        address: result,
                        userInfo: addresses[index]?.userInfo
                    }
                    setParsedUserData(cur => [newData, ...cur]);
                });
            }
        }
        return () => {initial.current = true}
    }, [addresses]);

    if (initial.current) {
        initial.current = false;
        return null;
    }

    return (
        <GoogleMap
            icon="here"
            mapContainerStyle={mapStyles}
            zoom={zoom}
            center={c ? parsedUserData[0]?.address : center}>
                {parsedUserData.map((position) => {
                    return (
                    <div key={position?.address}>
                        <Marker 
                            position={position?.address} 
                            icon={{url: position?.userInfo?.icon || defaultProfile, scaledSize: new google.maps.Size(25, 25)}} 
                            onClick={()=>window.location.href= "/profile?id="+position?.userInfo?.id}
                            onMouseOver={() => {
                                setUserHovered({show: true, position: position})
                            }}
                            onMouseOut={() => {
                                setUserHovered({show: false, position: {}})
                            }}>
                            
                        </Marker>
                        {userHovered?.show && <OverlayView
                            position={userHovered?.position?.address}
                            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                            getPixelPositionOffset={getPixelPositionOffset}>
                            <div className="info-window-container static">
                                <h5>{userHovered?.position?.userInfo?.displayName || "Default Profile"}</h5>
                            </div>
                        </OverlayView>}
                    </div>
                    );
                })}
        </GoogleMap>
    )
}

export default Map;