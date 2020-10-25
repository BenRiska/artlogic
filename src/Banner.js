import React, {useEffect} from 'react'
import "./Banner.css"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const images = ["https://artlogic-res.cloudinary.com/w_1600,h_1600,c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/library/images/main/main_slideshow_slides/1/edorh_mutu_vk5a6404.jpg", "https://artlogic-res.cloudinary.com/w_1600,h_1600,c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/library/images/main/main_slideshow_slides/1/tommy-clarke-cropped-2.jpg", "https://artlogic-res.cloudinary.com/w_1600,h_1600,c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/library/images/main/2/img_1452.jpg", "https://artlogic-res.cloudinary.com/w_1600,h_1600,c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/library/images/main/4/heidi-bucher-artist-estate.jpg", "https://artlogic-res.cloudinary.com/w_1600,h_1600,c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/images/main_slideshow_slides/images/5/stocksy_txpb46fa1af7hk200_large_1624197-copy.jpg"]

function Banner() {

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.intersectionRatio > 0){
                    entry.target.style.animation = `anim5 .5s ${entry.target.dataset.delay} forwards ease`;
                } 
            })
        })

        const div = document.querySelectorAll(".slideText > span");
        div.forEach(d => observer.observe(d))
        
    }, [])



    return (
        <div className="banner">
            <div className="banner__slides">
                <div className="banner__slide">
                    <div className="banner__slideImage">
                        <img src={images[0]} alt="banner poster"/>
                        <div className="banner__slideText">
                            <div className="slideText">
                            <span data-delay="0s">G</span>
                            <span data-delay="0.05s">r</span>
                            <span data-delay="0.1s">o</span>
                            <span data-delay="0.15s">w</span>
                            </div>
                            {" "}
                            <div className="slideText">
                            <span data-delay="0.2s">y</span>
                            <span data-delay="0.25s">o</span>
                            <span data-delay="0.3s">u</span>
                            <span data-delay="0.35s">r</span>
                            </div>
                            {" "}
                            <div className="slideText">
                            <span data-delay="0.4s">a</span>
                            <span data-delay="0.45s">r</span>
                            <span data-delay="0.5s">t</span>
                            </div>
                            {" "}
                            <div className="slideText">
                            <span data-delay="0.55s">b</span>
                            <span data-delay="0.6s">u</span>
                            <span data-delay="0.65s">s</span>
                            <span data-delay="0.7s">i</span>
                            <span data-delay="0.75s">n</span>
                            <span data-delay="0.8s">e</span>
                            <span data-delay="0.85s">s</span>
                            <span data-delay="0.9s">s</span>
                            </div>
                            {" "}
                            <div className="slideText">
                            <span data-delay="0.95s">o</span>
                            <span data-delay="1s">n</span>
                            <span data-delay="1.05s">l</span>
                            <span data-delay="1.1s">i</span>
                            <span data-delay="1.15s">n</span>
                            <span data-delay="1.2s">e</span>
                            <span data-delay="1.25s">.</span>
                            </div>
                        </div>
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
