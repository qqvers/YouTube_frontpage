import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";

export default function LeftMenu() {
  return (
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
  );
}
