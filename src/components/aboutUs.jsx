import "../styles/aboutUsStyle.css";
import aboutUsOne from "../assets/image/about-us-one.avif";
import aboutUsTwo from "../assets/image/about-us-two.avif";

export function AboutUsComponent(){
    return(
        <div id="about-us" className="about-us-section" data-section>
            <div className="about-us-content">
                <div className="left-side"> 
                    <div className="about-us-sec-header">
                        <h3 style={{color:"oklch(0.64 0.24 354.76)", width: "max-content", letterSpacing: "4px"}}>O NAMA</h3>
                        <p style={{color: "white"}}>Vaša destinacija za luksuznu modu</p>
                    </div>

                    <div className="about-us-text">
                        <p className="about-us-info" >Monamour je butik koji spaja eleganciju, stil i strast za modom. Osnovani sa vizijom da pružimo jedinstveno iskustvo kupovine, biramo svaki komad sa posebnom pažnjom kako bismo našim klijentima ponudili najbolje iz sveta mode.</p>

                        <p className="about-us-info" >Naša kolekcija obuhvata pažljivo odabrane komade od svetski priznatih brendova i talentovanih dizajnera. Verujemo da moda treba da bude dostupna svima koji žele da izraze svoju individualnost i samopouzdanje.</p>

                        <p className="about-us-info" >Posetite nas i otkrijte svet u kojem je svaki detalj savršen, a svaki komad priča svoju priču.</p>

                        <div className="client-info">
                            <div className="years-of-work">
                                <p style={{color:"oklch(0.64 0.24 354.76)",fontSize: "40px"}}>4+</p>
                                <p style={{color: "gray",fontSize: "15px"}}>GODINA ISKUSTVA</p>
                            </div>
                            <div className="satisfied-customers">
                                <p style={{color:"oklch(0.64 0.24 354.76)", fontSize: "40px"}}>1000+</p>
                                <p style={{color: "gray",fontSize: "15px"}}>ZADOVOLJNIH KLIJENATA</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right-side">
                    <div className="img-wrap">
                            <img src={aboutUsOne} alt="" className="about-us-img"/>
                    </div>

                    <div className="img-wrap">
                        <img src={aboutUsTwo}   className="about-us-img bottom-picture" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}