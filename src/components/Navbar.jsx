import { IoMdSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddFill } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import LogoAndMenu from "./LogoAndMenu";

export default function Navbar({ setShowLeftMenu }) {
  return (
    <div className="fixed bg-ytBlack flex justify-between items-center w-full h-16  text-white top-0 left-0 z-50">
      <LogoAndMenu setShowLeftMenu={setShowLeftMenu} />

      <div className="flex items-center w-1/2 max-w-2xl justify-end relative">
        <input
          type="text"
          placeholder="Search"
          className="hidden min-w-[6rem] h-8 w-full border border-gray-600 mr-2 py-4 pl-4 bg-[#181818] rounded-full sm:inline-block focus:outline-none"
        />
        <div className="absolute cursor-pointer z-10 mr-2 right-10 rounded-full h-8 px-2 pt-1 duration-100 hover:bg-gray-600 ml-2 sm:hover:bg-[#282828] sm:rounded-r-full sm:rounded-l-none sm:bg-[#282828] sm:border sm:border-gray-600">
          <IoMdSearch size={25} />
        </div>
        <div className="rounded-full  cursor-pointer h-full p-2 duration-100 hover:bg-gray-600">
          <FaMicrophone size={23} />
        </div>
      </div>

      <div className="flex items-center justify-start w-fit mr-4">
        <div className="rounded-full h-full p-2 duration-100 hover:bg-gray-600 ml-2  cursor-pointer">
          <RiVideoAddFill size={23} />
        </div>
        <div className="rounded-full h-full p-2 duration-100 hover:bg-gray-600 mx-2  cursor-pointer">
          <FaBell size={23} />
        </div>

        <img
          src="https://source.unsplash.com/random/32"
          alt="profile_pic"
          className="rounded-full w-8 h-8 mr-4"
        />
      </div>
    </div>
  );
}
