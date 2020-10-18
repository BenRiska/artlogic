import React from 'react'
import "./GalleryPromo.css"

function GalleryPromo() {
    return (
        <div className="galleryPromo">
            <div className="galleryPromo__container">
                <div className="galleryPromo__image">
                    <img src="https://artlogic-res.cloudinary.com/w_1000,h_1000,c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/images/feature_panels/images_and_objects/683/altman-siegel-gallery-cropped.jpg" alt="Claudia Atman-Siegal"/>
                    <p>Claudia Altman-Siegel, Altman Siegel Gallery</p>
                </div>
                <div className="galleryPromo__content">
                    <div className="galleryPromo__tabs">
                        <button className="galleryPromo__tab--active">For galleries</button>
                        <button>For artists</button>
                    </div>
                    <div className="galleryPromo__header">
                    <h2>We’re helping to keep the art world working.</h2>
                    <p>Whether you are in the gallery or at home, you and your team are always able to easily and elegantly organise, manage and share. Send beautiful mailing campaigns, organise your inventory, share artworks with collectors and create stunning online exhibitions to boost your sales. Watch our latest webinar on Online Viewing Rooms here.</p>
                    </div>
                    <div className="galleryPromo__links">
                    <h3>Find out more about</h3>
                    <div className="galleryPromo__linksContainer">
                        <button>Database</button>
                        <button>Websites</button>
                        <button>Online Viewing Rooms</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryPromo
