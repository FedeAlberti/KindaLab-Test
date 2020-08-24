import React, { useState } from 'react'

import { DataContext } from './DataContext';
import { TableLoc } from './TableLoc';
import { MapLoc } from './MapLoc';

import "./food.css";
import { useFetch } from '../../hooks/useFetch';
    
export const FoodScreen = () => {

    const [loc, setLoc] = useState([]);

    const url = `https://data.sfgov.org/resource/rqzj-sfat.json`;

    const {data, loading} = useFetch(url);
        

    return (

        <div >
            <DataContext.Provider value={{ data , loc, setLoc }}>

                    { loading ? 

                    <div className='centerDiv'>
                        <div class="loader"></div>
                        <h1> Loading </h1>
                    </div>
                    
                    :

                    <div className="row screen-container">
                        <TableLoc  />
                        <MapLoc    /> 
                    </div>
                } 
            </DataContext.Provider>
        </div>

    )
}
    