import { BiBot } from "react-icons/bi";
import formatAnyText from "../../utills/formatAnyText.";
import ChatLoading from "./ChatLoading";
const Message = ({ DarkMode, Response, Loading, }) => {
  const html = formatAnyText(Response);

  return (
    <div
      className={`w-full h-full m-auto  rounded-md  overflow-y-auto p-5 backdrop-blur-2xl   max-w-[1080px] ${
        DarkMode ? "bg-[#00000030] text-white  " : "bg-[#ffffff]  text-black "
      }
     
      `}
    >
      <ul
        className={`mb-2 p-3 rounded-2xl   overflow-y-auto flex justify-start ${
          DarkMode ? "bg-gray-700" : "bg-gray-200"
        }`}
      >
        <li
          className={` rounded-lg  p-3 shadow-md w-full ${
            DarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
          }`}
        >
          <span className="text-2xl text-purple-700 flex gap-2 items-center mb-5">
            <span className="text-xs font-semibold bg-purple-400 rounded-3xl p-3">
              Your Answer Here Below
            </span>
            <BiBot />
          </span>
          
        <ChatLoading html={html} Loading={Loading} /> 
        
        </li>
      </ul>
    </div>
  );
};

export default Message;
