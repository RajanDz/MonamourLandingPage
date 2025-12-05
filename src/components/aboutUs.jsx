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
                        <p className="about-us-info" >Od ljeta 2021. godine, ušli smo u svijet prodaje i vrlo brzo postali stranica prepoznatljiva po neobičnim i unikatnim haljinama. 
Godinama smo dobijali vaše povjerenje i potvrdu da je vrijeme za sljedeći korak.</p>

                        <p className="about-us-info" >U aprilu 2025. otvorili smo vrata našeg butika u Podgorici, gdje smo nastavili da za vas biramo posebne i pažljivo odabrane komade.</p>

                        <p className="about-us-info" >Danas u našem butiku nudimo širok asortiman haljina za specijalne prilike, u vrlo ograničenim količinama i bez ponavljanja kolekcija. 
U prijatnom ambijentu zajedno tražimo savršen izbor — haljinu koja ostavlja poseban utisak.</p>

                        <div className="client-info">
                            <div className="years-of-work">
                                <p style={{color:"oklch(0.64 0.24 354.76)",fontSize: "40px"}}>4+</p>
                                <p style={{color: "gray",fontSize: "15px"}}>GODINA ISKUSTVA</p>
                            </div>
                            <div className="satisfied-customers">
                                <p style={{color:"oklch(0.64 0.24 354.76)", fontSize: "40px"}}>10000+</p>
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