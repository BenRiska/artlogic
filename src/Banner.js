import React from 'react'
import "./Banner.css"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Banner() {
    return (
        <div className="banner">
            <div className="banner__slides">
                <div className="banner__slide">
                    <div className="banner__slideImage">
                        <img src="https://artlogic-res.cloudinary.com/w_1600,h_1600,c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/library/images/main/main_slideshow_slides/1/edorh_mutu_vk5a6404.jpg" alt="banner poster"/>
                        <p className="banner__slideText">Grow your art business online.</p>
                    </div>
                </div>
                <div className="banner__slideHeader">
                    <span> We're helping galleries and artists to adapt and thrive.</span>
                </div>
            </div>
            <div className="banner__scroll">
                <ExpandMoreIcon fontSize="large" />
            </div>
        </div>
    )
}

export default Banner
