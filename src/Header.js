import React from 'react'
import {NavLink} from "react-router-dom"

function Header() {
    return (
       <>
       <div className="navbar">
       <h1 className="title">HackerNews</h1>
       <div className="nav-title">
       <NavLink activeClassName="active_class" to="/topstories">Top stories</NavLink>
       <NavLink activeClassName="active_class" to="/beststories">Best stories</NavLink>
       <NavLink activeClassName="active_class" to="lateststories">Latest stories</NavLink>
       </div>
       </div>

       </>
    )
}

export default Header
