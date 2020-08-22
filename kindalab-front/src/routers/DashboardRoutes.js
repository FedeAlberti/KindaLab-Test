import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { FoodScreen } from '../components/FoodScreen'
import { Navbar } from '../components/UI/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
        <div className="container-fluid">
            <Switch>
                <Route exact path="/food" component={FoodScreen} />

                <Redirect to="/food" />
            </Switch>

        </div>
            
        </>
    )
}
