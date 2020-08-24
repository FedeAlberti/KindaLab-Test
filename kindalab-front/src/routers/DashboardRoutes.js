import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { FoodScreen } from '../components/foodScreen/FoodScreen'
import { Navbar } from '../components/UI/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
        <div>
            <Switch>
                <Route exact path="/food" component={FoodScreen} />

                <Redirect to="/food" />
            </Switch>

        </div>
            
        </>
    )
}
