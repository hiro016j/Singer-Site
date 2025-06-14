import { useEffect, useRef, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import Hider from "./Hider";
import linear from "../../assets/lines (1).png";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

interface reels {
    id: number;
    reel: string;
    title: string;
}

const Reels = () => {
    const [reelData, setReelData] = useState<reels[]>([]);
    const [reel, setReel] = useState<number>(0);
    const [degre, setDegre] = useState<number>(0);
    const [loader, setLoader] = useState<boolean>(true);
    const [reelScale, setReelScale] = useState<string>("scale-0");
    const playRef = useRef<HTMLVideoElement | null>(null);
    const pauseRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        fetch("/models/reels.json")
            .then(res => res.json())
            .then(data => {
                setReelData(data);
                setDegre(360 / data.length);
                setReelScale(`"scale-"+${73 - data.length}`)
                setLoader(false);
            });
    }, []);
    const leftMove = () => {
        if (reel > 0) {
            setReel(reel - 1)
        } else {
            setReel(reelData.length - 1)
        }
    }

    const rightMove = () => {
        if (reel < reelData.length - 1) {
            setReel(reel + 1)
        } else {
            setReel(0)
        }
    }
    useEffect(() => {
        playRef.current?.play();
        pauseRef.current?.pause();
    }, [reel])
    return (
        <>
            <img src={linear} alt="" className='select-none w-full absolute mt-[-300px]' />
            <div
                id='Lavhalar'
                className="w-full h-screen flex justify-center app-background items-center bg-gray-950 overflow-hidden"
            >
                <div className='absolute w-full h-screen text-3xl text-white flex sm:justify-around justify-between items-center'>
                    <div onClick={leftMove} className='flex sm:backdrop-blur-sm z-1 rounded-4xl active:scale-110 justify-center item-center p-2 shadow-2xl cursor-pointer transition-all sm:bg-[#ffffff4d] hover:bg-[#ffffff2d] sm:shadow-amber-50'>
                        <BsChevronLeft />
                    </div>
                    <div onClick={rightMove} className='flex sm:backdrop-blur-sm z-1 rounded-4xl active:scale-110 justify-center item-center p-2 shadow-2xl cursor-pointer transition-all sm:bg-[#ffffff4d] hover:bg-[#ffffff2d] sm:shadow-amber-50'>
                        <BsChevronRight />
                    </div>
                </div>
                <div
                    className="relative w-full h-screen flex justify-center items-center"
                    style={{ perspective: "1000px" }}
                >
                    <div
                        className="absolute transition-all flex justify-center items-center duration-400"
                        style={{
                            transformStyle: "preserve-3d",
                            transform: `rotateY(-${degre * reel}deg)`,
                        }}
                    >
                        {
                            loader ? (
                                <div className='w-64 aspect-[9/16] rounded-lg shadow-md bg-gray-900 flex justify-center items-center'>
                                    <ClipLoader color="dodgerblue" />
                                </div>
                            ) : (
                                reelData.map((e, i) => (
                                    <div
                                        key={i}
                                        className="absolute flex justify-center items-center"
                                        style={{
                                            transform: `rotateY(${degre * i}deg) ${reel === i ? "translateZ(350px)" : `translateZ(${40 * reelData.length}px)`}`,
                                            transformStyle: "preserve-3d",
                                            transition: "transform 0.3s",
                                        }}
                                    >
                                        <div className={`w-50 aspect-[9/16] select-none rounded-lg shadow-md bg-gray-900 overflow-hidden flex justify-center items-center transition-all duration-400 ${reel === i ? "scale-110 songShadov" : `${reelScale} opacity-20 blur-xs`}`}>
                                            {
                                                reel === i ? <video
                                                    src={e.reel}
                                                    ref={playRef}
                                                    controls
                                                    className="w-full sm:w-full aspect-[9/16] pointer-events-auto z-10 object-contain sm:object-contain shadow-lg"
                                                ></video> : <video
                                                    src={e.reel}
                                                    ref={pauseRef}
                                                    className="w-full sm:w-full aspect-[9/16] pointer-events-auto z-10 shadow-lg object-cover"
                                                ></video>
                                            }
                                        </div>
                                        {reel === i && (
                                            <div className='w-[500px] h-20 select-none left-[-350px] bottom-[-60px] openingAnima absolute'>
                                                <p className="text-white text-xl absolute left-0 text-center mt-4">{i + 1}# {e.title}</p>
                                            </div>
                                        )}
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
            <Hider />
        </>
    );
}

export default Reels;
