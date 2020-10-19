import React from 'react'
import "./Contact.css"

function Contact() {
    return (
        <div className="contact">
            <div className="contact__content">
            <h2>Get in touch</h2>
            <form>
                <div className="form__inputs">
                    <input type="text" placeholder="Name*"/>
                    <input type="text" placeholder="Your website"/>
                    <input type="email" placeholder="Email*"/>
                    <input type="text" placeholder="Organisation name*"/>
                    <input type="text" placeholder="Phone"/>
                    <select>
                        <option>Organisation Type *</option>
                        <option>Gallery</option>
                        <option>Collector</option>
                        <option>Artist</option>
                        <option>Art Dealer</option>
                        <option>Art Consultant/Adviser</option>
                        <option>IT Consultant</option>
                        <option>Other</option>
                    </select>
                    <select>
                        <option>Country *</option>
                        <option>Somewhere on earth</option>
                    </select>
                    <select>
                        <option>How did you hear about us? *</option>
                        <option>Work / Friend Referral</option>
                        <option>Google search</option>
                        <option>Other Online Search</option>
                        <option>Capterra</option>
                        <option>Facebook Ad</option>
                        <option>Instagram Ad</option>
                        <option>Social Media</option>
                        <option>Other</option>
                    </select>
                </div>
                <textarea placeholder="Message*" cols="30" rows="10"/>
                <div className="form__options">
                    <h4>Interested in:</h4>
                    <div className="form__optionsContainer">
                    <div className="form__checkbox">
                        <input type="checkbox" name="Database" value="Database"/>
                        <label for="Database">Database</label>
                    </div>
                    <div className="form__checkbox">
                        <input type="checkbox" name="Websites" value="Websites"/>
                        <label for="Websites">Websites</label>
                    </div>
                    <div className="form__checkbox">
                        <input type="checkbox" name="Online Viewing Rooms" value="Online Viewing Rooms"/>
                        <label for="Online Viewing Rooms">Online Viewing Rooms</label>
                    </div>
                    <div className="form__checkbox">
                        <input type="checkbox" name="Sales app" value="Sales app"/>
                        <label for="Sales app">Sales app</label>
                    </div>
                    <div className="form__checkbox">
                        <input type="checkbox" name="CRM" value="CRM"/>
                        <label for="CRM">CRM</label>
                    </div>
                    <div className="form__checkbox">
                        <input type="checkbox" name="Mailings" value="Mailings"/>
                        <label for="Mailings">Mailings</label>
                    </div>
                    </div>
                </div>
                <div className="form__submit">
                    <button>Send your message</button>
                    <p>
                        In order to respond to your enquiry, we will process the personal data you have supplied in accordance with our privacy policy. You can unsubscribe or change your preferences at any time by clicking the link in any emails.
                    </p>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Contact
