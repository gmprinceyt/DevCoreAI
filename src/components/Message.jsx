import { BiBot } from "react-icons/bi";
import formatAnyText from "../../utills/formatAnyText.";
const Message = ({ DarkMode, Response }) => {
  const html = formatAnyText(Response);

  return (
    <div
      className={`w-full h-full m-auto  rounded-md  overflow-y-auto p-5 backdrop-blur-2xl   max-w-[1080px] ${
        DarkMode ? "bg-[#00000030] text-white  " : "bg-[#ffffff]  text-black"
      }
     
      `}
    >
      <ul className={`mb-2 p-3 rounded-2xl h-full flex justify-start ${DarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
        <li
          className={` rounded-lg  p-3 shadow-md w-full ${
            DarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
          }`}
        >
          <span className="text-2xl text-purple-700"><BiBot /></span>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </li>
      </ul>
    </div>
  );
};

export default Message;
