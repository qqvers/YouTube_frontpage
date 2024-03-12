import { IoMdMenu } from "react-icons/io";
import logo from "../assets/yt_logo.png";

export default function LogoAndMenu({ setShowLeftMenu }) {
  return (
    <div className="flex items-center w-fit mr-32">
      <div className="rounded-full h-full p-2 duration-100 hover:bg-gray-600 ml-6 mr-4 cursor-pointer">
        <IoMdMenu
          size={30}
          onClick={() =>
            setShowLeftMenu((prevState) => {
              return !prevState;
            })
          }
        />
      </div>
      <img src={logo} alt="/" className="h-4" />
      <span className=" font-bold">YouTube</span>
      <span className="text-gray-200 text-[10px] ml-1">PL</span>
    </div>
  );
}
