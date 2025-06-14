import linear from "../../assets/lines (2).png"
import { FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Contact = () => {
  return (
    <>
      <img src={linear} alt="" className="w-full absolute select-none mt-[-300px]" />
      <div id="Bog'lanish" className='w-full h-screen bg-gray-950 app-background'>
        <div className="w-full p-20 absolute">
          <h1 className="quicksand text-3xl text-center text-white">Bog'lanish</h1>
          <div className="w-full h-[1px] bg-white mt-5"></div>
        </div>
        <div className="w-full h-full flex justify-around items-center gap-10 relative">
          <div className="w-full h-auto">
            <form action="#" className="grid gap-3 p-5 pl-10 text-white montserrat">
              <label htmlFor="name">Ismingiz</label>
              <input type="text" id="name" required className="border-2 border-white rounded-md" />
              <label htmlFor="email">Elektron pochtangiz</label>
              <input type="email" id="email" required className="border-2 border-white rounded-md" />
              <label htmlFor="xabar">Xabaringiz</label>
              <textarea name="" id="xabar" maxLength={500} required className="min-h-[50px] rounded-md max-h-[200px] border-2 border-white"></textarea>
              <button className="w-[120px] h-[40px] rounded-md cursor-pointer transition-al text-shadow-md text-shadow-gray-900 shadow-md active:shadow-xs mt-[250px] active:mt-[253px] duration-100 absolute shadow-blue-900 hover:shadow-blue-950 bg-blue-400">Yuborish</button>
            </form>
          </div>
          <div className="w-[150px] h-auto montserrat absolute mt-[300px] right-3 text-2xl text-white text-shadow-md text-shadow-gray-900 flex justify-around items-center">
            <a href="https://www.instagram.com/sehroj_gulomov?igsh=bXpscjR2YnNwMDdu" target="_blank"><FaInstagram className="p-2 cursor-pointer transition-al text-4xl rounded-full shadow-md active:shadow-xs active:mt-[3px] duration-100 shadow-blue-900 hover:shadow-blue-950 bg-blue-400" /></a>
            <a href="https://web.telegram.org/k/#@Sehroj1984" target="_blank"><FaTelegram className="p-2 cursor-pointer transition-al text-4xl rounded-full shadow-md active:shadow-xs active:mt-[3px] duration-100 shadow-blue-900 hover:shadow-blue-950 bg-blue-400" /></a>
            <a href="https://www.youtube.com/@Sehroj_Gulomov" target="_blank"><FaYoutube className="p-2 cursor-pointer transition-al text-4xl rounded-full shadow-md active:shadow-xs active:mt-[3px] duration-100 shadow-blue-900 hover:shadow-blue-950 bg-blue-400" /></a>
          </div>
        </div>
      </div>
      <div className="w-full h-15 border-t-2 sm:text-xl text-[10px] border-gray-300 montserrat bg-gray-900 text-gray-300 flex justify-center items-center">
        <p>© 2025 Sehroj G'ulomov. Barcha huquqlar himoyalangan.</p>
      </div>
    </>
  )
}

export default Contact