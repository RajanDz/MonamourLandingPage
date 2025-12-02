import "../styles/LocationSectionStyle.css";

export function LocationComponent(){
    return (
        <div id="location" className="location-section" data-section>
            <div className="loc-section-header">
                    <p style={{color: "oklch(.656 .241 354.308)", fontSize: "24px", letterSpacing: "3px"}}>LOKACIJA</p>
                    <p style={{color: "white", fontSize: "20px"}}>POSJETITE NAS</p>
            </div>
            <div className="location-info">
                    <div className="map-container">
                        <iframe
                            className="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.123123!2d19.2301324!3d42.4403457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134deb007b8cd29f%3A0x31d45e1cf3d36e7a!2sMon%20Amour!5e0!3m2!1sen!2sme!4v1234567890"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                    </div>
                    <div className="right-side-loc-info">
                        <div className="info">
                        <span className="material-symbols-outlined icon" style={{color: "white"}}>
                                location_on
                        </span>
                        <div className="info-details">
                            <p className="info-title">Adresa</p>
                            <p className="info-desc">Branka Delatica BB</p>
                        </div>
                        </div>
                        <div className="info">
                        <span className="material-symbols-outlined icon" style={{color: "white"}}>
                                schedule
                        </span>
                        <div className="info-details">
                            <p className="info-title">Radno vrijeme</p>
                            <p className="info-desc">Utorak - Subota: 16:00 - 20:00</p>
                            <p className="info-desc">Nedeljom i Ponedeljkom ne radimo</p>
                        </div>
                        </div>
                        <div className="info">
                        <span className="material-symbols-outlined icon " style={{color: "white"}}>
                                call
                        </span>
                        <div className="info-details">
                            <p className="info-title">Telefon</p>
                            <p className="info-desc">068 720 706 </p>
                        </div>
                        </div>
                        <div className="info">
                        <span className="material-symbols-outlined icon" style={{color: "white"}}>
                                mail
                        </span>
                        <div className="info-details">
                            <p className="info-title">Email</p>
                            <p className="info-desc">monamourmne@hotmail.com</p>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}