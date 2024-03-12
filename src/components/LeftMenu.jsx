import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";
import LogoAndMenu from "../components/LogoAndMenu";

export default function LeftMenu({ showLeftMenu, setShowLeftMenu }) {
  return (
    <>
      <div className="hidden md:flex flex-col text-[10px] items-center fixed top-16 left-5 z-10 bg-ytBlack h-36 w-14 text-white">
        <div className="flex flex-col items-center py-4 w-full cursor-pointer rounded-lg hover:bg-[#202020]">
          <IoMdHome size={23} />
          <span>Home</span>
        </div>
        <div className="flex flex-col items-center py-4 w-full cursor-pointer rounded-lg hover:bg-[#202020]">
          <SiYoutubeshorts size={23} />
          <span>Shorts</span>
        </div>
        <div className="flex flex-col items-center py-4 w-full cursor-pointer rounded-lg hover:bg-[#202020]">
          <MdOutlineSubscriptions size={23} />
          <span>Subscriptions</span>
        </div>
        <div className="flex flex-col items-center py-4 w-full cursor-pointer rounded-lg hover:bg-[#202020]">
          <CiYoutube size={23} />
          <span>You</span>
        </div>
      </div>

      {showLeftMenu && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-[110] visible xl:invisible duration-300 ease-in-out" />
      )}

      <div
        className={
          showLeftMenu
            ? "fixed w-56 h-full  bg-ytBlack text-white z-[120] py-2 top-0 left-0 font-medium  hover:overflow-y-scroll  duration-300 xl:duration-0"
            : "fixed w-56 h-full  bg-ytBlack text-white z-[120] py-2 top-0 left-[-100%] font-medium  hover:overflow-y-scroll  duration-300 xl:duration-0"
        }
      >
        <LogoAndMenu setShowLeftMenu={setShowLeftMenu} />
        <div className="flex flex-col items-start ml-5 mt-4 mx-2 cursor-pointer">
          <div className="flex pl-3 mb-3 rounded-lg py-2 w-full  hover:bg-[#202020] ">
            <IoMdHome size={23} />
            <button className="ml-8">Home</button>
          </div>
          <div className="flex pl-3 mb-3 rounded-lg py-2 w-full hover:bg-[#202020]">
            <SiYoutubeshorts size={23} />
            <button className="ml-8">Shorts</button>
          </div>
          <div className="flex pl-3 mb-3 rounded-lg py-2 w-full  hover:bg-[#202020]">
            <MdOutlineSubscriptions size={23} />
            <button className="ml-8">Subscriptions</button>
          </div>
        </div>
        <div className="w-[95%]  border-b  border-b-gray-500" />
        <div className="flex flex-col items-start ml-5 mt-4 mx-2 cursor-pointer">
          <div className="flex pl-3 mb-3 rounded-lg py-2 w-full  hover:bg-[#202020] ">
            <IoMdHome size={23} />
            <button className="ml-8">Home</button>
          </div>
          <div className="flex pl-3 mb-3 rounded-lg py-2 w-full hover:bg-[#202020]">
            <SiYoutubeshorts size={23} />
            <button className="ml-8">Shorts</button>
          </div>
          <div className="flex pl-3 mb-3 rounded-lg py-2 w-full  hover:bg-[#202020]">
            <MdOutlineSubscriptions size={23} />
            <button className="ml-8">Subscriptions</button>
          </div>
        </div>
        <div className="w-[95%]  border-b  border-b-gray-500" />
        <div className="flex flex-col items-start ml-5 mt-4 mx-2 cursor-pointer">
          <div className="flex pl-3 mb-3 rounded-lg py-2 w-full  hover:bg-[#202020] ">
            <IoMdHome size={23} />
            <button className="ml-8">Home</button>
          </div>
          <div className="flex pl-3 mb-3 rounded-lg py-2 w-full hover:bg-[#202020]">
            <SiYoutubeshorts size={23} />
            <button className="ml-8">Shorts</button>
          </div>
          <div className="flex pl-3 mb-3 rounded-lg py-2 w-full  hover:bg-[#202020]">
            <MdOutlineSubscriptions size={23} />
            <button className="ml-8">Subscriptions</button>
          </div>
        </div>
        <div className="w-[95%]  border-b  border-b-gray-500" />
        <div className="flex flex-col items-start ml-5 mt-4 mx-2 cursor-pointer">
          <div className="flex pl-3 mb-3 rounded-lg py-2 w-full  hover:bg-[#202020] ">
            <IoMdHome size={23} />
            <button className="ml-8">Home</button>
          </div>
          <div className="flex pl-3 mb-3 rounded-lg py-2 w-full hover:bg-[#202020]">
            <SiYoutubeshorts size={23} />
            <button className="ml-8">Shorts</button>
          </div>
          <div className="flex pl-3 mb-3 rounded-lg py-2 w-full  hover:bg-[#202020]">
            <MdOutlineSubscriptions size={23} />
            <button className="ml-8">Subscriptions</button>
          </div>
        </div>
        <div className="w-[95%]  border-b  border-b-gray-500" />
        <div className="flex flex-col items-start ml-5 mt-4 mx-2 cursor-pointer">
          <div className="flex pl-3 mb-3 rounded-lg py-2 w-full  hover:bg-[#202020] ">
            <IoMdHome size={23} />
            <button className="ml-8">Home</button>
          </div>
          <div className="flex pl-3 mb-3 rounded-lg py-2 w-full hover:bg-[#202020]">
            <SiYoutubeshorts size={23} />
            <button className="ml-8">Shorts</button>
          </div>
          <div className="flex pl-3 mb-3 rounded-lg py-2 w-full  hover:bg-[#202020]">
            <MdOutlineSubscriptions size={23} />
            <button className="ml-8">Subscriptions</button>
          </div>
        </div>
        <div className="w-[95%]  border-b  border-b-gray-500" />
        <div className="flex flex-col items-start ml-5 mt-4 mx-2 cursor-pointer">
          <div className="flex pl-3 mb-3 rounded-lg py-2 w-full  hover:bg-[#202020] ">
            <IoMdHome size={23} />
            <button className="ml-8">Home</button>
          </div>
          <div className="flex pl-3 mb-3 rounded-lg py-2 w-full hover:bg-[#202020]">
            <SiYoutubeshorts size={23} />
            <button className="ml-8">Shorts</button>
          </div>
          <div className="flex pl-3 mb-3 rounded-lg py-2 w-full  hover:bg-[#202020]">
            <MdOutlineSubscriptions size={23} />
            <button className="ml-8">Subscriptions</button>
          </div>
        </div>
        <div className="w-[95%]  border-b  border-b-gray-500" />
        <div className="flex flex-col items-start ml-5 mt-4 mx-2 cursor-pointer">
          <div className="flex pl-3 mb-3 rounded-lg py-2 w-full  hover:bg-[#202020] ">
            <IoMdHome size={23} />
            <button className="ml-8">Home</button>
          </div>
          <div className="flex pl-3 mb-3 rounded-lg py-2 w-full hover:bg-[#202020]">
            <SiYoutubeshorts size={23} />
            <button className="ml-8">Shorts</button>
          </div>
          <div className="flex pl-3 mb-3 rounded-lg py-2 w-full  hover:bg-[#202020]">
            <MdOutlineSubscriptions size={23} />
            <button className="ml-8">Subscriptions</button>
          </div>
        </div>
        <div className="w-[95%]  border-b  border-b-gray-500" />
      </div>
    </>
  );
}
