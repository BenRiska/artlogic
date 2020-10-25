import React, {useEffect} from 'react'
import "./ProductSlides.css"

function ProductSlides() {

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.intersectionRatio > 0){
                    entry.target.style.animation = `anim2 2.5s forwards ease`;
                } 
            })
        })

        const div = document.querySelectorAll(".productSlide__content");

        div.forEach(d => observer.observe(d))
        
    }, [])

    return (
        <div className="productSlides">
            <div className="productSlide">
                <div className="productSlide__content reverse-content">
                    <div className="productSlide__info">
                        <h2>Artlogic Database</h2>
                        <p>All you need to run your art business. The world’s leading online art database software with inventory management, CRM and built-in marketing tools that help improve, simplify and streamline your systems, allowing you to focus on the things that matter most.</p>
                        <button>Find out more</button>
                    </div>
                    <div className="productSlide_image-right">
                        <img src="https://artlogic-res.cloudinary.com/c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/images/feature_panels/image/382/devices-homepage.png" alt="product"/>
                    </div>
                </div>
            </div>
            <div className="productSlide">  
                <div className="productSlide__content">
                    <div className="productSlide_image">
                        <img src="https://artlogic-res.cloudinary.com/c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/images/feature_panels/image/383/homepage-database-image-2.png" alt="product"/>
                    </div> 
                    <div className="productSlide__info">
                        <h2>Artlogic Websites</h2>
                        <p>Our template and bespoke websites are designed specifically for the art world with beautiful designs that let galleries and artists create the perfect online space.</p>
                        <button>Find out more</button>
                    </div>
                </div>
            </div>
            <div className="productSlide">  
            <div className="productSlide__content reverse-content">
                <div className="productSlide__info">
                    <h2>Online Viewing Rooms</h2>
                    <p>Collect invaluable user data and sales leads from potential collectors in return for exclusive access to time-sensitive online exhibitions, artworks and content.</p>
                    <button>Find out more</button>
                </div>
                <div className="productSlide_image-phone">
                <img src="https://artlogic-res.cloudinary.com/c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/images/feature_panels/image/666/viewing-rooms.png" alt="product"/>
                </div>
                </div>
            </div>
            <div className="productSlide">  
            <div className="productSlide__content">
                <div className="productSlide_image">
                <img src="https://artlogic-res.cloudinary.com/c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/images/feature_panels/image/384/homepage-10.png" alt="product"/>
                </div>
                <div className="productSlide__info">
                    <h2>PrivateViews App</h2>
                    <p>Our sales app is the perfect solution to browse, share and sell artworks in a beautifully designed & easy to use interface.</p>
                    <button>Find out more</button>
                </div>
                </div>
            </div>
            <div className="productSlide slide-margin">  
            <div className="productSlide__content reverse-content content-left">
                <div className="productSlide__support">
                    <h2>Dedicated support for when you need it.</h2>
                    <p>We work with thousands of clients in 70 countries and our client team is always on hand to help. Our Support Website also has hundreds of guides and videos to help you get the most out of our products.</p>
                    <button>Visit Support</button>
                </div>
                <div className="productSlide_image-phone">
                <img src="https://artlogic-res.cloudinary.com/c_limit,f_auto,fl_lossy/ws-artlogicaspect/usr/images/feature_panels/image/items/cf/cf4427841d164a55a15bfb292fd86a9c/artlogic-support.png" alt="product"/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSlides
