import React, {useState, useEffect} from 'react'
import "./Contact.css"

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [org, setOrg] = useState("");
    const [phone, setPhone] = useState("");
    const [orgType, setOrgType] = useState("");
    const [country, setCountry] = useState("");
    const [discoveredBy, setDiscoveredBy] = useState("");
    const [message, setMessage] = useState("");
    const [database, setDatabase] = useState(false);
    const [websites, setWebsites] = useState(false);
    const [OVR, setOVR] = useState(false);
    const [salesApp, setSalesApp] = useState(false);
    const [CRM, setCRM] = useState(false);
    const [mailings, setMailings] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.intersectionRatio > 0){
                    entry.target.style.animation = `anim4 2.5s ${entry.target.dataset.delay} forwards ease`;
                } 
            })
        })

        const div = document.querySelectorAll(".ani-input");
        div.forEach(d => observer.observe(d))
        
    }, [])


    return (
        <div className="contact">
            <div className="contact__content">
            <h2>Get in touch</h2>
            <form>
                <div className="form__inputs">
                    <input data-delay="0s" className={name ? "active-input" : "ani-input"} value={name} onChange={e => setName(e.currentTarget.value)} type="text" placeholder="Name*"/>
                    <input data-delay=".2s" className={website ? "active-input" : "ani-input"} value={website} onChange={e => setWebsite(e.currentTarget.value)} type="text" placeholder="Your website"/>
                    <input data-delay=".1s" className={email ? "active-input" : "ani-input"} value={email} onChange={e => setEmail(e.currentTarget.value)} type="email" placeholder="Email*"/>
                    <input data-delay=".4s" className={org ? "active-input" : "ani-input"} value={org} onChange={e => setOrg(e.currentTarget.value)} type="text" placeholder="Organisation name*"/>
                    <input data-delay=".3s" className={phone ? "active-input" : "ani-input"} value={phone} onChange={e => setPhone(e.currentTarget.value)} type="number" placeholder="Phone"/>
                    <select data-delay=".6s" className={orgType ? "active-input" : "ani-input"} onChange={e => setOrgType(e.currentTarget.value)} >
                        <option value="">Organisation Type *</option>
                        <option>Gallery</option>
                        <option>Collector</option>
                        <option>Artist</option>
                        <option>Art Dealer</option>
                        <option>Art Consultant/Adviser</option>
                        <option>IT Consultant</option>
                        <option>Other</option>
                    </select>
                    <select data-delay=".5s" className={country ? "active-input" : "ani-input"} onChange={e => setCountry(e.currentTarget.value)}>
                        <option value="">Country *</option>
                        <option>Somewhere on earth</option>
                    </select>
                    <select data-delay=".7s" className={discoveredBy ? "active-input" : "ani-input"} onChange={e => setDiscoveredBy(e.currentTarget.value)}>
                        <option value="">How did you hear about us? *</option>
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
                <textarea className={message ? "active-input" : undefined} onChange={e => setMessage(e.currentTarget.value)} placeholder="Message*" cols="30" rows="10"/>
                <div className="form__options">
                    <h4>Interested in:</h4>
                    <div className="form__optionsContainer">
                    <div className="form__checkbox">
                        <input onChange={e => setDatabase(!database)} type="checkbox" name="Database" value="Database"/>
                        <label className={database ? "active-input" : undefined}  htmlFor="Database">Database</label>
                    </div>
                    <div className="form__checkbox">
                        <input  onChange={e => setWebsites(!websites)} type="checkbox" name="Websites" value="Websites"/>
                        <label className={websites ? "active-input" : undefined} htmlFor="Websites">Websites</label>
                    </div>
                    <div className="form__checkbox">
                        <input  onChange={e => setOVR(!OVR)} type="checkbox" name="Online Viewing Rooms" value="Online Viewing Rooms"/>
                        <label className={OVR ? "active-input" : undefined} htmlFor="Online Viewing Rooms">Online Viewing Rooms</label>
                    </div>
                    <div className="form__checkbox">
                        <input  onChange={e => setSalesApp(!salesApp)} type="checkbox" name="Sales app" value="Sales app"/>
                        <label className={salesApp ? "active-input" : undefined} htmlFor="Sales app">Sales app</label>
                    </div>
                    <div className="form__checkbox">
                        <input  onChange={e => setCRM(!CRM)} type="checkbox" name="CRM" value="CRM"/>
                        <label className={CRM ? "active-input" : undefined} htmlFor="CRM">CRM</label>
                    </div>
                    <div className="form__checkbox">
                        <input  onChange={e => setMailings(!mailings)} type="checkbox" name="Mailings" value="Mailings"/>
                        <label className={mailings ? "active-input" : undefined} htmlFor="Mailings">Mailings</label>
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
