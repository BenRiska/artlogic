import React from 'react'
import "./Products.css"

function Products() {
    return (
        <div className="products">
            <div className="products__header">
                <h2>Bring everything together, beautifully.</h2>
                <p>Our products seamlessly integrate, providing you with all you need to run your art business.</p>
            </div>
            <div className="products__container">
                <div className="products__product">
                    <img src="https://artlogic-res.cloudinary.com/w_800,h_800,c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/feature_panels/images/682/database-artlogic-icon.jpg" alt="product logo"/>
                    <h3>Online Database & CRM</h3>
                    <p>Manage your inventory, contacts, CRM, marketing and accounts with ease, using the world’s leading art database.</p>
                    <button>Find out more</button>
                </div>
                <div className="products__product">
                    <img src="https://artlogic-res.cloudinary.com/w_800,h_800,c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/feature_panels/images/682/website-artlogic-icon.jpg" alt="product logo"/>
                    <h3>Websites</h3>
                    <p>Grow your art business with a stunning template or bespoke art gallery or artist website, tailored for the art world.</p>
                    <button>Find out more</button>
                </div>
                <div className="products__product">
                    <img src="https://artlogic-res.cloudinary.com/w_800,h_800,c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/feature_panels/images/682/online-viewing-room-icon.jpg" alt="product logo"/>
                    <h3>Online Viewing Rooms</h3>
                    <p>Create beautifully curated online exhibitions, collect invaluable user data and increase your sales opportunities.</p>
                    <button>Find out more</button>
                </div>
                <div className="products__product">
                    <img src="https://artlogic-res.cloudinary.com/w_800,h_800,c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/images/feature_panels/images_and_objects/682/sales-artlogic-icon-2.jpg" alt="product logo"/>
                    <h3>Sales & Marketing</h3>
                    <p>Boost your sales with privately curated webpages, record client offers and send and manage email campaigns.</p>
                    <button>Find out more</button>
                </div>
            </div>
        </div>
    )
}

export default Products
