import userImage from "../../assets/singer_portred.png"
import Hider from "./Hider"

const Home = () => {
    return (
        <>
            <div id="Asosiy" className="w-full h-screen frame z-1 absolute overflow-hidden">
                <div className="eagle-lake-regular headerAnima z-1 xl:w-200 lg:150 md:w-120 sm:w-80 w-full lg:h-100 xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl  md:leading-22 leading-12 text-white absolute sm:top-50 bottom-15 text-shadow-2xs text-shadow-gray-900 sm:left-20 p-5 sm:p-0">
                    Xonanda, san'atkor va ijrochi Sehroj G'ulomov.
                </div>
                <div className="w-full h-screen flex app-background justify-center items-center overflow-hidden relative">
                    <img src={userImage} alt="Sehroj G'lomov" className="headerAnima xl:w-2/3 lg:w-3/4 sm:scale-100 scale-170  xl:ml-180 lg:ml-120 md:ml-100 sm:ml-60 ml-0 sm:bottom-0  bottom-25  drop-shadow-2xl drop-shadow-gray-800 absolute" />
                    <svg
                        className="absolute bottom-0 w-full h-32 "
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="rgba(3,7,18,0.9)" 
                            d="M0,256L1440,128L1440,320L0,320Z"
                        />
                    </svg>

                </div>
            </div>
            <Hider />
        </>
    )
}

export default Home
