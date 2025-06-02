import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Bg o‘zgarish
      setScrolled(currentScrollY > 20);

      // Scroll yo‘nalishini aniqlash
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // pastga tushyapti
        setVisible(false);
      } else {
        // yuqoriga chiqyapti
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`w-full h-[80px] fixed flex z-10 justify-between pl-20 pr-30 items-center transform transition-all duration-300 ${scrolled ? 'bg-[#ffffff49] backdrop-blur-xl shadow-md text-gray-100' : 'bg-transparent text-gray-300'} ${visible ? 'translate-y-0' : '-translate-y-20'}`}>
      <div>
        <h1 className="logo text-3xl">Sehroj G'ulomov</h1>
      </div>
      <div>
        <ul className="ml-[-200px] bellota-text-regular-italic flex justify-center items-center gap-10 text-lg">
          {["Asosiy", "Kliplar", "Qo'shiqlar", "Lavhalar", "Bog'lanish"].map((item, idx) => (
            <li
              key={idx}
              className="relative group cursor-pointer transition duration-300"
            >
              <span className="group-hover:text-blue-300 transition duration-300">{item}</span>
              <span className="absolute left-0 -bottom-0 w-0 h-[1px] bg-blue-300 group-hover:w-full transition-all duration-150"></span>
            </li>
          ))}
        </ul>

      </div>
      <div className="w-20 h-10 rounded-lg bellota-text-regular-italic flex justify-center items-center">
        <p className="relative group cursor-pointer text-lg transition duration-300">
          <span className="group-hover:text-blue-300 transition duration-300">Link</span>
          <span className="absolute left-0 -bottom-0 w-0 h-[1px] bg-blue-300 group-hover:w-full transition-all duration-150"></span>
        </p>
      </div>
    </div>
  )
}

export default Navbar
