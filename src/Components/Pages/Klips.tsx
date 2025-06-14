import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { ClipLoader } from 'react-spinners';
import { EffectCoverflow } from 'swiper/modules';
import { SlControlPlay } from "react-icons/sl";
import { useEffect, useState } from 'react';
import linear from "../../assets/back lines.png"
import Hider from './Hider';

interface klips {
  id: number;
  image: string;
  video: string;
  title: string;
}

const Klips = () => {
  const [klip, setKlip] = useState<number>()
  const [klipData, setKlipData] = useState<klips[]>([])
  const [loader, setLoader] = useState<boolean>(true)
  const [directionType, setDirectionType] = useState<"horizontal" | "vertical" | undefined>("horizontal");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setDirectionType("vertical");
      } else {
        setDirectionType("horizontal");
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    fetch("/models/klips.json")
      .then(res => res.json())
      .then(data => {
        setKlipData(data)
        setLoader(false)
      })
  }, [])

  return (
    <>
      <div id='Kliplar' className='w-full h-auto app-background bg-gray-950 overflow-x-hidden'>
        <div className="w-full p-20">
          <h1 className="quicksand text-3xl text-center text-white">Kliplar</h1>
          <div className="w-full h-[1px] bg-white mt-5"></div>
        </div>
        <div className='w-full h-screen flex justify-center items-center overflow-hidden relative'>
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-950 to-transparent pointer-events-none z-10"></div>
          <div className="w-full px-10 pb-10">
            <Swiper
              direction={directionType}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: -100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              {
                loader ?
                  <div className='w-full h-screen flex justify-center items-center'>
                    <div className="w-full max-w-4xl aspect-[16/9] bg-gray-800 flex justify-center items-center rounded-xl overflow-hidden shadow-2xl">
                      <ClipLoader color='dodgerblue' />
                    </div>
                  </div> :
                  klipData.map((e, i) => (
                    <SwiperSlide key={i} className='w-full max-w-4xl aspect-[16/9] flex justify-center items-center rounded-2xl overflow-hidden shadow-2xl shadow-gray-900 '>
                      <div className='flex justify-center items-center overflow-hidden'>
                        <div className={`z-10 w-full h-full justify-center items-center ${klip === i ? "hidden" : "flex"}`}>
                          <img src={e.image} alt="Qoshing qaro" className='w-full h-full' />
                          <div className=' absolute black-fade w-full h-full lg:opacity-0 lg:top-[50px] lg:hover:opacity-100 hover:top-0 transition-all duration-400 flex justify-center items-center'>
                            <SlControlPlay onClick={() => setKlip(i)} className='text-blue-300 lg:text-7xl sm:text-5xl text-3xl cursor-pointer hover:scale-110 transition-all' />
                            <h1 className='bellota-text-regular-italic absolute sm:text-2xl text-xl text-blue-400 sm:bottom-8 sm:left-10 bottom-3 left-5 '>{i + 1}# {e.title}</h1>
                          </div>
                        </div>
                        {klip === i ? <video controls autoPlay className="w-full object-cover" ><source src={e.video} type="video/mp4" /></video> : null}
                      </div>
                    </SwiperSlide>
                  ))
              }
            </Swiper>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
      <img src={linear} alt="" className='w-full z-1 absolute' />
      <Hider />
    </>
  );
};

export default Klips;
