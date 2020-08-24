import React, { useContext, useState } from 'react'
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from 'leaflet';

import { DataContext } from './DataContext';

import './food.css';


export const MapLoc = () => {

    const {loc} = useContext(DataContext);
    
    const [selected, setSelected] = useState(null);

    const pushcartIcon = new Icon({
        iconUrl: "assets/pushcart.svg",
        iconSize: [25, 25]
    });
    
    const foodtruckIcon = new Icon({
        iconUrl: "assets/foodtruck.svg",
        iconSize: [25, 25]
    });

    const handleIcon = (facilitytype) =>{
        if(facilitytype === 'Truck')
            { return foodtruckIcon }
            else{
                return pushcartIcon
            }
    };

    return (
        <div className="col-6 ">
            <Map className="col" center={[37.78, -122.45]} zoom={12}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='Federico Alberti'
                />
        
                 {loc.map(location => (
                    <Marker
                        key={location.objectid}
                        position={[location.latitude, location.longitude]}
                        onClick={() => {
                            setSelected(location);
                        }}

                        icon={handleIcon(location.facilitytype)}
                    />
                ))} 

                {selected && (
                    <Popup
                    position={[
                        selected.latitude,
                        selected.longitude
                    ]}
                    onClose={() => {
                        setSelected(null);
                    }}
                    >
                    <div>
                        <h4>{selected.applicant}</h4>
                        <p> {selected.address}</p>
                    </div>
                    </Popup>
                )}

            </Map>
        </div>
    )
}
