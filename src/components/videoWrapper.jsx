import "../styles/videoStyle.css";
import video from "../assets/videos/reklamaMonamour.mp4";
import mobileVideo from "../assets/videos/reklamaMonamourTelefon.mp4";
export function VideoComponent() {
    return (
        <div className="video-wrapper">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="video-desktop"
            >
                <source src={video} type="video/mp4" />
            </video>
            <video
                autoPlay
                loop
                muted
                playsInline
                className="video-mobile"
            >
                <source src={mobileVideo} type="video/mp4" />
            </video>
            {/* VIGNETTE OVERLAY */}
            <div className="vignette"></div>
            <div className="video-wrapper-content">
                    <h3>MONAMOUR</h3>
                    <p>Gde elegancija sreće strast</p>
                    <button>ISTRAZI KOLEKCIJU</button>
            </div>
        </div>
    );
}
