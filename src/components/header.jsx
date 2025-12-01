import "../styles/headerStyle.css";
import { HashLink } from "react-router-hash-link";
export function HeaderComponent(){
    return(
       <div className="header-section">
            <div className="header-content">
                <h3>MONAMOUR</h3>
                <div className="header-options">   
                     
                    <p onClick={() => {
                        document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth" });
                    }}>O nama</p>
                    <p onClick={() => {
                        document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" });
                    }}>Kolekcije</p>
                    <p onClick={() => {
                        document.getElementById("location")?.scrollIntoView({ behavior: "smooth" });
                    }}>Lokacija</p>
                </div>
            </div>
       </div>
    )
}