import React, {useEffect, useState} from 'react'
import "./Stats.css"
import CountUp from "react-countup";
import Flickity from "flickity";


function Stats() {

    const [showCounter, setShowCounter] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.intersectionRatio > 0){
                    entry.target.style.animation = `anim1 2.5s forwards ease`
                    setShowCounter(true);
                } 
            })
        })

        const div = document.querySelectorAll(".stats__stat");

        div.forEach(d => observer.observe(d))
        
    }, [])

    useEffect(() => {
        new Flickity( '.main-carousel', {
          // options
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        percentPosition: true,
        prevNextButtons: false,
        pageDots: false,
        });
      }, [])

    return (
        <div className="stats">
            <div className="stats__container">
                <div className="stats__stat">
                    <h2> {showCounter && <CountUp className="stats__counter" duration={3} end={40} />} <span>Million</span></h2>
                    <p>Artworks viewed on Artlogic Websites and Online Viewing Rooms per month.</p>
                    <div><span>May 2020</span></div>
                </div>
                <div className="stats__stat">
                    <h2> {showCounter && <CountUp className="stats__counter" duration={4} end={5} />}   <span>Million</span></h2>
                    <p>Emails sent using Artlogic's mailing campaign tools per month.</p>
                    <div><span>May 2020</span></div>
                </div>
            </div>
            <div className="main-carousel">
          <div className="carousel-item"><img className="stats__sponsor" src="https://artlogic-res.cloudinary.com/c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/images/clients/logo/49/galerie-dutkohd.png" alt=""/></div>
          <div className="carousel-item"><img className="stats__sponsor" src="https://artlogic-res.cloudinary.com/c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/images/clients/logo/31/mg.png" alt=""/></div>
          <div className="carousel-item"><img className="stats__sponsor" src="https://artlogic-res.cloudinary.com/c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/images/clients/logo/61/download-copy.png" alt=""/></div>
          <div className="carousel-item"><img className="stats__sponsor" src="https://artlogic-res.cloudinary.com/c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/images/clients/logo/34/ppow.png" alt=""/></div>
          <div className="carousel-item"><img className="stats__sponsor" src="https://artlogic-res.cloudinary.com/c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/images/clients/logo/23/vm.jpg" alt=""/></div>
          <div className="carousel-item"><img className="stats__sponsor" src="https://artlogic-res.cloudinary.com/c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/images/clients/logo/48/almine-rech.png" alt=""/></div>
          <div className="carousel-item"><img className="stats__sponsor" src="https://artlogic-res.cloudinary.com/c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/images/clients/logo/63/pm_logo.png" alt=""/></div>
          <div className="carousel-item"><img className="stats__sponsor" src="https://artlogic-res.cloudinary.com/c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/images/clients/logo/47/rodolphe-janssen.png" alt=""/></div>
        </div>
        </div>
    )
}

export default Stats
