import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import video from "../../assets/backgroundVideo.mp4";
import videoImage from "../../assets/maxresdefault.jpg"
import { EffectCoverflow } from 'swiper/modules';
import { FaRegCirclePlay } from "react-icons/fa6";
import { useState } from 'react';

const Klips = () => {
  const [klip, setKlip] = useState<number>()
  return (
    <div className='w-full h-screen bg-gray-900 overflow-hidden'>
      <div className="w-full p-20">
        <h1 className="quicksand text-3xl text-center text-white">Kliplar</h1>
        <div className="w-full h-[1px] bg-white mt-5"></div>
      </div>
      <div className='w-full h-auto flex justify-center items-center'>
        <div className="w-[60%] px-10 pb-10">
          <Swiper
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
            <SwiperSlide className='flex justify-center items-center rounded-2xl overflow-hidden '>
              <div className='flex justify-center items-center overflow-hidden'>
                <div className={`z-10 w-full h-full justify-center items-center ${klip === 0 ? "hidden" : "flex"}`}>
                  <img src={videoImage} alt="Qoshing qaro" className='w-full h-full' />
                  <div className=' absolute black-fade w-full h-full opacity-0 top-[50px] hover:opacity-100 hover:top-0 transition-all duration-400 flex justify-center items-center'>
                    <FaRegCirclePlay onClick={() => setKlip(0)} className='text-blue-300 text-7xl cursor-pointer hover:scale-110 transition-all' />
                    <h1 className='bellota-text-regular-italic absolute text-6xl text-white bottom-22 left-10 '>Qoshing qaro</h1>
                    <p className='w-100 bellota-text-regular-italic absolute text-xs text-white bottom-10 left-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusamus aperiam maiores asperiores distinctio.</p>
                  </div>
                </div>
                {klip === 0 && <video src={video} controls autoPlay className="w-full rounded-2xl shadow-lg border-2 border-white bg-black object-cover" />}
              </div>
            </SwiperSlide>
            <SwiperSlide className='flex justify-center items-center rounded-2xl overflow-hidden'>
              <div className='flex justify-center items-center overflow-hidden'>
                <div className={`z-10 w-full h-full justify-center items-center ${klip === 1 ? "hidden" : "flex"}`}>
                  <img src={videoImage} alt="Qoshing qaro" className='w-full h-full' />
                  <div className=' absolute black-fade w-full h-full opacity-0 top-[50px] hover:opacity-100 hover:top-0 transition-all duration-400 flex justify-center items-center'>
                    <FaRegCirclePlay onClick={() => setKlip(1)} className='text-blue-300 text-7xl cursor-pointer hover:scale-110 transition-all' />
                    <h1 className='bellota-text-regular-italic absolute text-6xl text-white bottom-22 left-10 '>Qoshing qaro</h1>
                    <p className='w-100 bellota-text-regular-italic absolute text-xs text-white bottom-10 left-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusamus aperiam maiores asperiores distinctio.</p>
                  </div>
                </div>
                {klip === 1 && <video src={video} controls autoPlay className="w-full rounded-2xl shadow-lg border-2 border-white bg-black object-cover" />}
              </div>
            </SwiperSlide>
            <SwiperSlide className='flex justify-center items-center rounded-2xl overflow-hidden'>
              <div className='flex justify-center items-center overflow-hidden'>
                <div className={`z-10 w-full h-full justify-center items-center ${klip === 2 ? "hidden" : "flex"}`}>
                  <img src={videoImage} alt="Qoshing qaro" className='w-full h-full' />
                  <div className=' absolute black-fade w-full h-full opacity-0 top-[50px] hover:opacity-100 hover:top-0 transition-all duration-400 flex justify-center items-center'>
                    <FaRegCirclePlay onClick={() => setKlip(2)} className='text-blue-300 text-7xl cursor-pointer hover:scale-110 transition-all' />
                    <h1 className='bellota-text-regular-italic absolute text-6xl text-white bottom-22 left-10 '>Qoshing qaro</h1>
                    <p className='w-100 bellota-text-regular-italic absolute text-xs text-white bottom-10 left-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusamus aperiam maiores asperiores distinctio.</p>
                  </div>
                </div>
                {klip === 2 && <video src={video} controls autoPlay className="w-full rounded-2xl shadow-lg border-2 border-white bg-black object-cover" />}
              </div>
            </SwiperSlide>
            <SwiperSlide className='flex justify-center items-center rounded-2xl overflow-hidden'>
              <div className='flex justify-center items-center overflow-hidden'>
                <div className={`z-10 w-full h-full justify-center items-center ${klip === 3 ? "hidden" : "flex"}`}>
                  <img src={videoImage} alt="Qoshing qaro" className='w-full h-full' />
                  <div className=' absolute black-fade w-full h-full opacity-0 top-[50px] hover:opacity-100 hover:top-0 transition-all duration-400 flex justify-center items-center'>
                    <FaRegCirclePlay onClick={() => setKlip(3)} className='text-blue-300 text-7xl cursor-pointer hover:scale-110 transition-all' />
                    <h1 className='bellota-text-regular-italic absolute text-6xl text-white bottom-22 left-10 '>Qoshing qaro</h1>
                    <p className='w-100 bellota-text-regular-italic absolute text-xs text-white bottom-10 left-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusamus aperiam maiores asperiores distinctio.</p>
                  </div>
                </div>
                {klip === 3 && <video src={video} controls autoPlay className="w-full rounded-2xl shadow-lg border-2 border-white bg-black object-cover" />}
              </div>
            </SwiperSlide>
            <SwiperSlide className='flex justify-center items-center rounded-2xl overflow-hidden'>
              <div className='flex justify-center items-center overflow-hidden'>
                <div className={`z-10 w-full h-full justify-center items-center ${klip === 4 ? "hidden" : "flex"}`}>
                  <img src={videoImage} alt="Qoshing qaro" className='w-full h-full' />
                  <div className=' absolute black-fade w-full h-full opacity-0 top-[50px] hover:opacity-100 hover:top-0 transition-all duration-400 flex justify-center items-center'>
                    <FaRegCirclePlay onClick={() => setKlip(4)} className='text-blue-300 text-7xl cursor-pointer hover:scale-110 transition-all' />
                    <h1 className='bellota-text-regular-italic absolute text-6xl text-white bottom-22 left-10 '>Qoshing qaro</h1>
                    <p className='w-100 bellota-text-regular-italic absolute text-xs text-white bottom-10 left-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusamus aperiam maiores asperiores distinctio.</p>
                  </div>
                </div>
                {klip === 4 && <video src={video} controls autoPlay className="w-full rounded-2xl shadow-lg border-2 border-white bg-black object-cover" />}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Klips;
