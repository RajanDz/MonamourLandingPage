import "../styles/CollectionSectionStyle.css"
import { collectionData } from "../data/collectionData"
import { instagramPosts } from "../data/collectionData"
import { Instagram } from "lucide-react"
export function OurCollectionComponent(){

    return (
        <div id="collection" className="our-collection-section" data-section>
                <div className="collection-content">
                    <div className="collection-sec-header"> 
                            <p style={{color:"oklch(0.64 0.24 354.76)", width: "max-content", letterSpacing: "4px"}}>INSTAGRAM</p>
                            <p style={{color: "white" , fontSize: "30px"}}>Pratite nas na Instagramu</p>
                            <p style={{color: "white"}}>Budite uvijek u toku sa novitetima</p>
                            <button className="instagram-btn" onClick={() => window.open("https://www.instagram.com/monamour_mne?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D")}>
                                @monamour_mne
                                <span className="arrow">→</span>
                            </button>
                    </div>
                    <div className="collection-cards">
                        {instagramPosts.map((item) => (
                            <div className="card" onClick={() => window.open(item.url, "_blank")} key={item.id}>
                                <div className="img-wrap">
                                    <img src={item.image} alt="" className="about-us-img"/>
                                </div>
                                <div className="post-info">
                                    <div className="likes">
                                        <span>❤︎</span>
                                        <p>{item.likes}</p>
                                    </div>

                                    <div className="comments">
                                        <span>💬</span>
                                        <p>{item.comments}</p>
                                    </div>
                                </div>
                                <div className="vignette"></div>
                                <div className="collection-info">
                                     <p>{item.name}</p>
                                     <p style={{color: "#dddadaff"}}>{item.desc}</p>
                                     <button className="arrow-btn">
                                            Pogledaj 
                                            <span className="arrow">→</span>
                                        </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p style={{color: "white", fontSize: "20px" ,fontWeight: "500"}}>Tagujte nas <span style={{color:"rgba(252, 5, 231, 1)"}}>@monamour_mne</span> i podijelite Vaše utiske i slike sa nama!</p>
                </div>
        </div>
    )
}