import React from 'react'
import "./Nav.css"
import path from "./logo"

function Nav() {
    return (
        <div className="nav">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 627.294 168.87" class="svg-inline replaced-svg">
                <path d={path}></path>
            </svg>
            <div className="nav__links">
                <p>Home</p>
                <p>Database</p>
                <p>Websites</p>
                <p>PrivateViews Apps</p>
                <p>Online Viewing Rooms</p>
                <p>Clients</p>
                <p>Blog</p>
                <p>About</p>
                <p>Support</p>
                <p>Contact</p>
            </div>
           </div>
    )
}

export default Nav
