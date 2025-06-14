import Home from "./Pages/Home"
import Navbar from "./Navbar"
import backgroundVideo from "../assets/backgroundVideo.mp4"
import Klips from "./Pages/Klips";
import Songs from "./Pages/Songs";
import Reels from "./Pages/Reels";
import Contact from "./Pages/Contact";

const Header = () => {
    return (
        <div className="w-full h-screen">
            <div className="w-full h-screen relative bg-gray-950 overflow-hidden">
                <video
                    className="w-full h-full object-cover absolute top-0 left-0"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
                <div className="relative z-10">
                    <Home />
                </div>
                <Navbar />
            </div>
            <Klips/>
            <Songs/>
            <Reels/>
            <Contact/>
        </div>
    );
};

export default Header;
