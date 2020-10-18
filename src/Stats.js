import React from 'react'
import "./Stats.css"

function Stats() {
    return (
        <div className="stats">
            <div className="stats__container">
                <div>
                    <h2>40 <span>Million</span></h2>
                    <p>Artworks viewed on Artlogic Websites and Online Viewing Rooms per month.</p>
                    <div><span>May 2020</span></div>
                </div>
                <div>
                    <h2>5 <span>Million</span></h2>
                    <p>Emails sent using Artlogic's mailing campaign tools per month.</p>
                    <div><span>May 2020</span></div>
                </div>
            </div>
            <div className="stats__sponsors">
            <div className="stats__sponsorContainer">
                <img className="stats__sponsor" src="https://artlogic-res.cloudinary.com/c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/images/clients/logo/49/galerie-dutkohd.png" alt=""/>
            </div>
            <div className="stats__sponsorContainer">
                <img className="stats__sponsor" src="https://artlogic-res.cloudinary.com/c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/images/clients/logo/31/mg.png" alt=""/>
            </div>
            <div className="stats__sponsorContainer">
                <img className="stats__sponsor" src="https://artlogic-res.cloudinary.com/c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/images/clients/logo/61/download-copy.png" alt=""/>
            </div>
            <div className="stats__sponsorContainer">
                <img className="stats__sponsor" src="https://artlogic-res.cloudinary.com/c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/images/clients/logo/34/ppow.png" alt=""/>
            </div>
            <div className="stats__sponsorContainer">
                <img className="stats__sponsor" src="https://artlogic-res.cloudinary.com/c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/images/clients/logo/23/vm.jpg" alt=""/>
            </div>
            <div className="stats__sponsorContainer">
                <img className="stats__sponsor" src="https://artlogic-res.cloudinary.com/c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/images/clients/logo/48/almine-rech.png" alt=""/>
            </div>
            <div className="stats__sponsorContainer">
                <img className="stats__sponsor" src="https://artlogic-res.cloudinary.com/c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/images/clients/logo/63/pm_logo.png" alt=""/>
            </div>
            <div className="stats__sponsorContainer">
                <img className="stats__sponsor" src="https://artlogic-res.cloudinary.com/c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/images/clients/logo/47/rodolphe-janssen.png" alt=""/>
            </div>
            </div>
        </div>
    )
}

export default Stats
