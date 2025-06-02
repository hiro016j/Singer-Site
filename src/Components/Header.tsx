import Home from "./Pages/Home"
import backgroundVideo from "../assets/backgroundVideo.mp4"

const Header = () => {
    return (
        <div className="w-full h-screen bg-gray-900">
            <div className="w-full h-screen absolute flex justify-center items-center overflow-hidden">
                <video
                    className="w-full"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
            </div>
            <Home />
        </div>
    )
}

export default Header
