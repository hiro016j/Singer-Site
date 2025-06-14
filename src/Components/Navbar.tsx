import { useEffect, useRef, useState } from "react";
import { RiMenu5Fill, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false)
  const textRef = useRef<string>(window.location.href);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textRef.current).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false);
        setBurgerMenu(false)
      } else {
        setVisible(true);
        setBurgerMenu(false)
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // smooth scroll
    }
  };
  return (
    <>
      <div className={`w-full h-[80px] fixed flex z-10 justify-between p-5 items-center transform transition-all duration-300 overflow-hidden ${scrolled ? 'bg-[#03071259] backdrop-blur-xl shadow-md text-gray-100' : 'bg-transparent text-gray-300'} ${visible ? 'translate-y-0' : '-translate-y-20'}`}>
        <div>
          <h1 onClick={() => scrollToSection("Asosiy")} className="logo sm:text-3xl text-xl">Sehroj G'ulomov</h1>
        </div>
        <div className="lg:block hidden">
          <ul className="w-full bellota-text-regular-italic flex justify-right items-center gap-10 text-lg">
            {["Asosiy", "Kliplar", "Qo'shiqlar", "Lavhalar", "Bog'lanish"].map((item, idx) => (
              <li
                key={idx}
                className="relative group cursor-pointer transition duration-300"
              >
                <span onClick={() => scrollToSection(item)} className="lg:group-hover:text-blue-300 group-active:text-blue-300 transition duration-300">{item}</span>
                <span className="absolute left-0 -bottom-0 w-0 h-[1px] bg-blue-300 group-hover:w-full transition-all duration-150"></span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-20 h-10 rounded-lg bellota-text-regular-italic flex justify-center items-center gap-5">
          <p onClick={handleCopy} className="relative group cursor-pointer text-lg transition duration-300">
            <span className="lg:group-hover:text-blue-300 group-active:text-blue-300 transition duration-300">Link</span>
            <span className="absolute left-0 -bottom-0 w-0 h-[1px] bg-blue-300 group-hover:w-full transition-all duration-150"></span>
          </p>
          <div onClick={() => (setBurgerMenu(!burgerMenu), setScrolled(burgerMenu ? false : true))} className="lg:hidden flex justify-center items-center transition-all p-4 rounded-full text-white text-xl active:bg-[#ffffff6c]">
            {burgerMenu ? <RiCloseLine className="transition-all" /> : <RiMenu5Fill className="transition-all" />}
          </div>
        </div>
      </div>
      <div className={`w-full h-screen top-[80px] lg:hidden block fixed text-white p-10 z-10 transition-all ${scrolled ? 'bg-[#03071259] backdrop-blur-xl shadow-md text-gray-100' : 'bg-transparent text-gray-300'} ${burgerMenu ? "left-0" : "left-full"}`}>
        <ul className="w-full bellota-text-regular-italic grid justify-center items-center gap-10 text-lg">
          {["Asosiy", "Kliplar", "Qo'shiqlar", "Lavhalar", "Bog'lanish"].map((item, idx) => (
            <li
              key={idx}
              className="relative group cursor-pointer transition duration-300"
            >
              <span onClick={() => scrollToSection(item)} className="lg:group-hover:text-blue-300 group-active:text-blue-300 transition duration-300">{item}</span>
              <span className="absolute left-0 -bottom-0 w-0 h-[1px] bg-blue-300 group-hover:w-full transition-all duration-150"></span>
            </li>
          ))}
        </ul>
      </div>
      {copied && (
        <div className="w-full h-screen flex justify-center z-10 transition-all items-center fixed text-white montserrat">
          <p className="p-5 bg-black/80 rounded-md">Nusxalandi!</p>
        </div>
      )}
    </>
  )
}

export default Navbar
