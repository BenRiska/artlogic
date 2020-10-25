import React from 'react'
import "./Footer.css"
import { IconButton } from "@material-ui/core";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__links">
                    <div>
                        <a href="google.com" target="_blank">About</a>
                        <a href="google.com" target="_blank">Careers</a>
                        <a href="google.com" target="_blank">Who we support</a>
                        <a href="google.com" target="_blank">Artlogic database login</a>
                    </div>
                    <div>
                        <a href="google.com" target="_blank">Join our mailing list</a>
                        <a href="google.com" target="_blank">Accessibility policy</a>
                        <a href="google.com" target="_blank">Privacy</a>
                        <a href="google.com" target="_blank">Security</a>
                    </div>
                    <div>
                        <p href="google.com" target="_blank">UK <span>020 7112 8825</span></p>
                        <p href="google.com" target="_blank">USA <span>(917) 341-2828</span></p>
                        <p href="google.com" target="_blank">International <span>+44 20 7112 8825</span></p>
                        <p href="google.com" target="_blank">Email <span>info@artlogic.net</span></p>
                    </div>
                </div>
                <div className="footer__icons">
                    <IconButton className="footer__icon">
                        <FacebookIcon className="footer__icon-inner"/>
                    </IconButton>
                    <IconButton className="footer__icon">
                        <TwitterIcon className="footer__icon-inner" />
                    </IconButton>
                    <IconButton className="footer__icon">
                        <InstagramIcon className="footer__icon-inner"/>
                    </IconButton>
                    <IconButton className="footer__icon">
                        @
                    </IconButton>
                </div>
            </div>
            <div className="footer__copyright">
            COPYRIGHT © 2020 ARTLOGIC ps: please don't sue me
            </div>
        </div>
    )
}

export default Footer
