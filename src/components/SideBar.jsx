import { BiCopy } from "react-icons/bi";
import { CiLight } from "react-icons/ci";
import { FcCheckmark } from "react-icons/fc";
import { GrNew } from "react-icons/gr";
import { MdDarkMode } from "react-icons/md";
import { RxReset } from "react-icons/rx";
import { Link } from "react-router";

const SideBar = ({
  DarkModeToggle,
  DarkMode,
  Copy,
  SetCopy,
  Response,
  NewChat,
  newchat,
}) => {
  async function CopyText(text) {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    SetCopy(false);
    setTimeout(() => SetCopy(true), 2000);
  }

  return (
    <aside className={`p-3 w-1/6 ${DarkMode ? "bg-[#1E2939]" : "bg-[#E5E7EB]"} aside  `}>
      <Link to={"/"} className="flex gap-1.5 items-center ">
        <img src="icon.png" alt="logo" className="w-9 h-9" />
        <span
          className={` tracking-widest font-bold logo-name ${
            DarkMode ? "text-white" : "text-black"
          }`}
        >
          DevCore
        </span>
      </Link>
      {/* New Chat */}
      <div
        onClick={() => {
          newchat();
        }}
        className={`flex px-3 newchat  rounded-md shadow py-2 gap-1 justify-start  items-center cursor-pointer  mt-6 ${
          DarkMode ? "bg-black" : "bg-white"
        }`}
      >
        <span className="text-2xl">{NewChat ? <GrNew /> : <RxReset />}</span>
        <span className="text-xs text"> {`${NewChat ? "NewChat" : "Started"}`}</span>
      </div>
      {/* DarkMode Button  */}
      <div
        onClick={DarkModeToggle}
        className={`flex px-3 rounded-md   shadow py-2 gap-1 justify-start  items-center cursor-pointer  mt-2 ${
          DarkMode ? "bg-black" : "bg-white"
        }`}
      >
        <span className="text-2xl">
          {DarkMode ? <CiLight /> : <MdDarkMode />}
        </span>
        <span className="text-xs text">
          {" "}
          {`${DarkMode ? "LightMode" : "DarkMode"}`}
        </span>
      </div>
      {/* Copy Button */}
      <div
        onClick={() => {
          CopyText(Response);
        }}
        className={`flex px-3 rounded-md shadow py-2  gap-1 justify-start  items-center cursor-pointer  mt-2 ${
          DarkMode ? "bg-black" : "bg-white"
        }`}
      >
        <span className="text-2xl">{Copy ? <BiCopy /> : <FcCheckmark />}</span>
        <span className="text-xs text"> {`${Copy ? "Copy" : "Copied"}`}</span>
      </div>
    </aside>
  );
};

export default SideBar;
