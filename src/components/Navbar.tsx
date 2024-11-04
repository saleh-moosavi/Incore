import { useEffect, useRef, useState } from "react";
import Btn from "./Btn";
import { IoIosMenu } from "react-icons/io";

export default function Navbar() {
  const sidebar: any = useRef();
  const [width, setWidth] = useState(window.innerWidth);
  const [scroll, setScroll] = useState(window.scrollY);
  const [backdrop, setBackdrop] = useState(true);

  useEffect(() => {
    const handleWinWidth = () => {
      setWidth(window.innerWidth);
    };
    const handleWinScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("resize", handleWinWidth);
    window.addEventListener("scroll", handleWinScroll);
    return () => {
      window.addEventListener("resize", handleWinWidth);
      window.addEventListener("scroll", handleWinScroll);
    };
  }, []);

  function sideBarClose(e: React.MouseEvent) {
    e.preventDefault();
    sidebar.current.style.transform = "translateX(100%)";
    document.body.style.overflowY = "auto";
    setBackdrop(!backdrop);
  }
  function sideBarOpen(e: React.MouseEvent) {
    e.preventDefault();
    sidebar.current.style.transform = "translateX(0)";
    document.body.style.overflowY = "hidden";
    setBackdrop(!backdrop);
  }

  if (width >= 679) {
    return (
      <div
        className={`fixed top-0 w-screen flex justify-around items-center py-3 backdrop-blur-sm z-50 transition-all duration-300 ${
          scroll > 100 ? "bg-black/30" : ""
        }`}
      >
        <h2 className="text-white text-2xl font-semibold cursor-pointer">Incore</h2>
        <ul className="flex gap-x-5 text-white font-semibold bg-white/10 backdrop-blur-sm px-5 py-1 rounded-full shadow-[0_-1px_0_#fff]">
          <li className="hover:shadow-[0_1px_0_#fff] transition-all duration-300 cursor-pointer">
            Home
          </li>
          <li className="hover:shadow-[0_1px_0_#fff] transition-all duration-300 cursor-pointer">
            Services
          </li>
          <li className="hover:shadow-[0_1px_0_#fff] transition-all duration-300 cursor-pointer">
            Tour
          </li>
          <li className="hover:shadow-[0_1px_0_#fff] transition-all duration-300 cursor-pointer">
            About
          </li>
          <li className="hover:shadow-[0_1px_0_#fff] transition-all duration-300 cursor-pointer">
            Contacts
          </li>
        </ul>
        <Btn bgColor="white" txtColor="black" text="Login" />
      </div>
    );
  } else {
    return (
      <div
        className={`fixed top-0 left-0 right-0 flex justify-between px-5 py-5 items-center z-50 transition-all duration-300 ${
          scroll > 100 ? "bg-black/30" : ""
        }`}
      >
        <h2 className="text-white text-2xl font-semibold">Incore</h2>
        <a
          onClick={sideBarOpen}
          className="text-white hover:text-slate-200 text-2xl hover:scale-125 transition-all duration-300 cursor-pointer"
        >
          <IoIosMenu />
        </a>
        <ul
          ref={sidebar}
          className="flex flex-col w-1/2 text-right px-5 gap-y-2 py-10 fixed top-0 bottom-0 right-0 gap-x-5 text-white font-semibold bg-black/20 backdrop-blur-sm transition-all duration-300 translate-x-full z-50"
        >
          <div className="relative text-left">
            <a
              onClick={sideBarClose}
              className="text-2xl text-rose-600 hover:text-rose-300 transition-all duration-300"
              href=""
            >
              Χ
            </a>
          </div>
          <li className="hover:shadow-lg p-3 cursor-pointer transition-all duration-300">
            Home
          </li>
          <li className="hover:shadow-lg p-3 cursor-pointer transition-all duration-300">
            Services
          </li>
          <li className="hover:shadow-lg p-3 cursor-pointer transition-all duration-300">
            Tour
          </li>
          <li className="hover:shadow-lg p-3 cursor-pointer transition-all duration-300">
            About
          </li>
          <li className="hover:shadow-lg p-3 cursor-pointer transition-all duration-300">
            Contacts
          </li>
          <Btn bgColor="white" txtColor="black" text="Login" />
        </ul>
        <div
          onClick={sideBarClose}
          className={`fixed top-0 bottom-0 left-0 right-0 bg-gray-100/10 z-40 ${
            backdrop ? "hidden" : null
          }`}
        ></div>
      </div>
    );
  }
}
