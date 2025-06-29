import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router";

const SideBar = ({ DarkModeToggle, DarkMode }) => {
  return (
    <div className={`${DarkMode ? 'border-gray-800' : 'border-gray-200'} p-3 w-1/6 border-r-1 `}>
      <Link to={"/"} className="flex gap-1.5 items-center ">
        <img src="copilot-icon.svg" alt="logo" className="w-9 h-9" />
        <span className={` tracking-widest font-bold logo-name ${DarkMode ? 'text-white': 'text-black' }`}>
          DevCore
        </span>
      </Link>
      <div onClick={DarkModeToggle} className="flex gap-1 justify-start  items-center cursor-pointer  mt-6">
        <span className="text-2xl">{DarkMode ? <CiLight /> : <MdDarkMode />}</span>
        <span className="text-xs">  {`${DarkMode ? 'LightMode' : 'DarkMode' }`}</span>
      </div>
    </div>
  );
};

export default SideBar;
