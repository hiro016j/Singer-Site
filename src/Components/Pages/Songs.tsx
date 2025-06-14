import { useEffect, useRef, useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight, BsPlay, BsPause, BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { Slider } from 'antd'
import Hider from "./Hider";

interface songs {
  id: number;
  img: string;
  audio: string;
  title: string;
}

const Songs = () => {
  const [songData, setSongData] = useState<songs[]>([]);
  const [song, setSong] = useState<number>(-1);
  const [play, setPlay] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    fetch("/models/songs.json")
      .then(res => res.json())
      .then(data => {
        setSongData(data)
      })
  }, [])
  useEffect(() => {
    if (!audioRef.current) return;
    if (play) audioRef.current.play();
    else audioRef.current.pause();
  }, [play, song])
  useEffect(() => {
    if (currentTime === duration) {
      setSong(song + 1);
    }
  }, [currentTime])
  const onLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };
  const onTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };
  const onSeek = (value: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };
  const forward10 = () => {
    if (audioRef.current) {
      let newTime = audioRef.current.currentTime + 10;
      if (newTime > duration) newTime = duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const back10 = () => {
    if (audioRef.current) {
      let newTime = audioRef.current.currentTime - 10;
      if (newTime < 0) newTime = 0;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };
  function formatTime(seconds: number) {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }

  return (
    <>
      <div id="Qo'shiqlar" className="w-full h-screen app-background bg-gray-950 relative overflow-hidden">
        <div className="w-full p-20 absolute">
          <h1 className="quicksand text-3xl text-center text-white">Qo'shiqlar</h1>
          <div className="w-full h-[1px] bg-white mt-5"></div>
        </div>
        {
          songData && songData.map((e, i) => (
            song === i ?
              <div key={i} className="flex w-full h-screen justify-center items-center">
                <div className="w-[400px] h-[400px]  overflow-hidden openingAnima rounded-2xl songShadov">
                  <img src={e.img} alt={e.title || "song image"} className=" w-full h-full object-cover" />
                </div>
                <div className="headerAnima text-white absolute lg:left-30 sm:left-10 left-5 sm:bottom-20 bottom-40">
                  <p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl">{i+1}# {e.title}</p>
                  <p className="text-xs mt-2">Sehroj G'ulomov</p>
                </div>
              </div> : null
          ))
        }
        <div className=" absolute w-full h-screen flex text-6xl text-blue-400 justify-between items-center top-0 left-0">
          <BsChevronCompactLeft onClick={() => song > 0 && setSong(song - 1)} className="w-[40px] h-[120px] z-1 transition-all active:scale-110 cursor-pointer hover:bg-[#ffffff10]" />
          <BsChevronCompactRight onClick={() => song < songData.length - 1 && setSong(song + 1)} className="w-[40px] h-[120px] z-1 transition-all active:scale-110 cursor-pointer hover:bg-[#ffffff10]" />
        </div>
        <div className="sm:w-1/5 w-full h-20 flex text-4xl text-white justify-around items-center absolute bottom-20 sm:left-2/5 ">
          <div onClick={back10} className="cursor-pointer z-1 hover:hover:bg-[#ffffff10] p-2 rounded-full transition-all active:scale-90 active:ml-[-10px]">
            <BsChevronDoubleLeft className="text-3xl" />
          </div>
          <div onClick={() => setPlay(!play)} className="cursor-pointer z-1 hover:hover:bg-[#ffffff10] p-2 rounded-full transition-all active:scale-90">
            {
              play ? <BsPause /> : <BsPlay />
            }
          </div>
          <div onClick={forward10} className="cursor-pointer z-1 hover:hover:bg-[#ffffff10] p-2 rounded-full transition-all active:scale-90 active:ml-[-10px]">
            <BsChevronDoubleRight className="text-3xl" />
          </div>
        </div>
        {
          songData && songData.map((e, i) => (
            song === i ?
              <div key={i} className="w-full h-20 z-1 flex gap-2 openingAnima sliderW justify-center items-center absolute bottom-0 left-0">
                <audio ref={audioRef} onLoadedMetadata={onLoadedMetadata} onTimeUpdate={onTimeUpdate} src={e.audio} />
                <p className="select-none text-white">{formatTime(currentTime)}</p>
                <Slider defaultValue={0} min={0} max={duration} value={currentTime} onChange={onSeek} tooltip={{ open: false }} className="w-1/2 h-1 duration-200 customSlider rounded-full shadow-2xl shadow-amber-50" />
                <p className="select-none text-white">{formatTime(duration)}</p>
              </div>
              : null
          ))
        }

      </div>
      <Hider />
    </>
  )
}

export default Songs
