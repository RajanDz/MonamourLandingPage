import "../styles/FooterStyle.css";

export function FooterComponent(){

    return (
        <div className="footer-section" id="footer">
            <div className="footer-content">
                <h1 className="brand-title">MONAMOUR</h1>
                <p style={{color: "white", letterSpacing: "5px", fontSize: "30px", fontWeight: "400"}}>POSJETITE NAS</p>
            </div>
            <p style={{color: "gray" , marginBottom: "20px", width: "max-content"}}>© 2025 Monamour. Sva prava zadržana.</p>
        </div>
    )
}