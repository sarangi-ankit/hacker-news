import React from 'react'
import {Route,Switch} from "react-router-dom"
import Topstories from "./Topstories"
import Beststories from "./Beststories"
import Lateststories from "./Lateststories"


function Body() {
    return (
        <>
        
        <Switch>
            <Route path="/topstories" component={Topstories} />
            <Route path="/beststories" component={Beststories} />
            <Route path="/lateststories" component={Lateststories} />
        </Switch>
        </>
    )
}

export default Body
