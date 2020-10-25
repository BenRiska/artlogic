import React, {useEffect, useState} from 'react'
import "./Nav.css"
import path from "./logo"
import ClearIcon from '@material-ui/icons/Clear';

function Nav() {

    const [navOpen, setNavOpen] = useState(false)

    useEffect(() => {
        const nav = document.querySelector(".nav")
        const navLinks = document.querySelector(".nav__links")
        const links = document.querySelectorAll(".nav__links > div")
        const logo = document.querySelector(".nav > svg");
        const browserHeight = window.innerHeight;
        const burgerNavText = document.querySelector(".nav__burger > p");
        const burgerNavIcon = document.querySelector(".nav__burgerBtn");

        document.addEventListener("scroll", () => {
            if (window.pageYOffset > browserHeight){
                console.log("white")
                nav.style.backgroundColor = "white";
                logo.style.fill = "black";
                burgerNavText.style.color = "black";
                burgerNavIcon.style.borderColor = "black";
                links.forEach(link => {
                    link.style.color = "black";
                })
                nav.style.boxShadow = "0px 5px 8px -9px rgba(0, 0, 0, 1)"
            } else{
                console.log("pink")
                nav.style.backgroundColor = "transparent";
                logo.style.fill = "#fffee0";
                burgerNavText.style.color = "#fffee0";
                burgerNavIcon.style.borderColor = "#fffee0";
                links.forEach(link => {link.style.color = "#fffee0";})
                nav.style.boxShadow = "none"
            }
        })

        links.forEach(link => {
            link.addEventListener("mouseenter", () => {
                if(link.className === "expand-320"){
                    nav.style.height = "320px";
                } else if (link.className === "expand-260"){
                    nav.style.height = "260px";
                } else if (link.className === "expand-180"){
                    nav.style.height = "180px";
                } 
            })
        })

        links.forEach(link => {
            link.addEventListener("mouseleave", () => {
                if(link.className === "expand-320" || link.className === "expand-180" || link.className === "expand-260"){
                    nav.style.height = "30px";
                }
            })
        })

        navLinks.addEventListener("mouseenter", () => {
            nav.style.backgroundColor = "white";
            logo.style.fill = "black";
            links.forEach(link => {
                link.style.color = "black";
            })
        })

        navLinks.addEventListener("mouseleave", () => {
            nav.style.height = "30px";
            if (window.pageYOffset > browserHeight){
            links.forEach(link => {
                link.style.color = "black";
            })
            } else {
                nav.style.backgroundColor = "transparent";
                links.forEach(link => {link.style.color = "#fffee0";})
                logo.style.fill = "#fffee0";
            }
            
        })
    }, [])

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { console.log(entry)
                if(entry.intersectionRatio > 0){
                    entry.target.style.animation = `anim6 1s ${entry.target.dataset.delay} forwards ease`;
                } 
            })
        })

        const div = document.querySelectorAll(".nav__links > div > ul > li");

        const burgerLinks = document.querySelectorAll(".nav__smallScreen > ul > li");

        div.forEach(d => observer.observe(d))
        burgerLinks.forEach(link => observer.observe(link))
    }, [])

    return (
        <div className="nav">
            <div onClick={e => setNavOpen(true)} className="nav__burger">
                <p>Menu</p>
                <div className="nav__burgerBtn"></div>
            </div>
            <div className={ navOpen ? "nav__smallScreen navOpen" : "nav__smallScreen"}>
                <div className="nav__exitContainer">
                    <ClearIcon onClick={e => setNavOpen(false)} fontSize="large" className="nav__exit" />
                </div>
                <ul>
                    <li data-delay="0.4s" style={{color: "white"}}>Home</li>
                    <li data-delay="0.5s">Database</li>
                    <li data-delay="0.6s">Websites</li>
                    <li data-delay="0.7s">PrivateViews App</li>
                    <li data-delay="0.8s">Online Viewing Rooms</li>
                    <li data-delay="0.9s">Clients</li>
                    <li data-delay="1s">Blog</li>
                    <li data-delay="1.1s">About</li>
                    <li data-delay="1.2s">Support</li>
                    <li data-delay="1.3s">Contact</li>
                </ul>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 627.294 168.87">
                <path d={path}></path>
            </svg>
            <div className="nav__links">
                <div>
                    <span>Home</span>
                </div>
                <div className="expand-320">
                    <span>Database</span>
                    <ul className="shift-1">
                        <li data-delay="0s">Overview</li>
                        <li data-delay="0.1s">For Galleries</li>
                        <li data-delay="0.2s">For Artists</li>
                        <li data-delay="0.3s">For Collectors</li>
                        <li data-delay="0.4s">Pricing</li>
                        <li data-delay="0.5s">Try our demo</li>
                    </ul>
                </div>
                <div className="expand-320">
                    <span>Websites</span>
                    <ul className="shift-2">
                        <li data-delay="0s">Artlogic Websites</li>
                        <li data-delay="0.1s">Online Viewing Rooms</li>
                        <li data-delay="0.2s">Bespoke</li>
                        <li data-delay="0.3s">Website Examples</li>
                        <li data-delay="0.4s">Pricing</li>
                        <li data-delay="0.5s">Getting Started</li>
                    </ul>
                </div>
                <div>
                    <span>PrivateViews Apps</span>
                </div>
                <div>
                    <span>Online Viewing Rooms</span>
                </div>
                <div>
                    <span>Clients</span>
                </div>
                <div>
                    <span>Blog</span>
                </div>
                <div className="expand-260">
                    <span>About</span>
                    <ul className="shift-3">
                        <li data-delay="0s">About us</li>
                        <li data-delay="0.1s">Who we support</li>
                        <li data-delay="0.2s">Careers</li>
                        <li data-delay="0.3s">Team</li>
                        <li data-delay="0.4s">Our partners</li>
                    </ul>
                </div>
                <div>
                    <span>Support</span>
                </div>
                <div className="expand-180">
                    <span>Contact</span>
                    <ul className="shift-4">
                        <li data-delay="0s">Details</li>
                        <li data-delay="0.1s">Send us a message</li>
                        <li data-delay="0.2s">Join our mailing list</li>
                    </ul>
                </div>
            </div>
           </div>
    )
}

export default Nav


