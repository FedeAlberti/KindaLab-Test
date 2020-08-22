import React, { useMemo, useState } from 'react'

import { DataContext } from './DataContext';
import { TableLoc } from './TableLoc';
import { MapLoc } from './MapLoc';

import "./food.css";
    
export const FoodScreen = () => {

    const [loc, setLoc] = useState([]);
    const [data, setData] = useState([]);
    const url = `https://data.sfgov.org/resource/rqzj-sfat.json`;
    useMemo(() => fetch(url).then (resp => resp.json() ).then(data => setData(data)), [url]);

    return (

        <div className="screen-container" >
            <DataContext.Provider value={{ data, setData, loc, setLoc }}>
                <div className="row">
                    <TableLoc  />
                    <MapLoc    /> 
                </div>
            </DataContext.Provider>
        </div>

    )
}
    