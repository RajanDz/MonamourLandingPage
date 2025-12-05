import "../styles/WhyUsSectionStyle.css";
import { reasonsToChooseUs } from "../data/collectionData";
import BackgroundBlur from "./BackgroundBlur";

export function WhyMonamourComponent() {
    return (
        <>
            <BackgroundBlur />

            <div className="why-to-choose-us-section" data-section>
                <div className="why-to-choose-us-header">
                    <p className="header-title" >ZAŠTO MONAMOUR</p>
                </div>
                <div className="reasons">
                    {reasonsToChooseUs.map((item) => (
                        <div className="reason" key={item.name}>
                            <span className="material-symbols-outlined icon" style={{ color: "white" }}>
                                {item.icon}
                            </span>
                            <h4 style={{ color: "white" }}>{item.name}</h4>
                            <p style={{ color: "white", fontSize: "15px" }}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
