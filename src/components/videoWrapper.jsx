import "../styles/videoStyle.css";
import video from "../assets/videos/heroSectionVideo.mp4";

export function VideoComponent() {
    return (
        <div className="video-wrapper">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="video-bg"
            >
                <source src={video} type="video/mp4" />
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
