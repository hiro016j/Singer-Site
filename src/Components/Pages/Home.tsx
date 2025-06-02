import userImage from "../../assets/singer_portred.png"

const Home = () => {
    return (
        <div className="w-full h-screen bg-[#101828bb] z-1 absolute backdrop-blur-sm">
            <div className="eagle-lake-regular headerAnima w-200 h-100 leading-22 text-white absolute top-50 left-20 text-7xl">
                Xonanda, san'atkor va ijrochi Sehroj G'ulomov.
            </div>
            <div className="w-full h-screen flex justify-center items-center overflow-hidden relative">
                <img src={userImage} alt="Sehroj G'lomov" className="headerAnima w-2/3 ml-180" />
                <div className="absolute w-[120%] h-[220px] blur-2xl bg-gray-900 bottom-[-80px]"></div>
            </div>
        </div>
    )
}

export default Home
