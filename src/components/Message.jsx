import { BiBot } from "react-icons/bi";
import formatAnyText from "../../utills/formatAnyText.";
const Message = ({ DarkMode, Response }) => {
  const html = formatAnyText(Response);

  return (
    <div
      className={`w-full h-full m-auto  rounded-md  overflow-y-auto p-5 backdrop-blur-2xl   max-w-[1080px] ${
        DarkMode ? "bg-[#00000030] text-white  " : "bg-[#ffffff30]  text-black"
      }
     
      `}
    >
      <ul className={`mb-2 flex justify-start`}>
        <li
          className={` rounded-lg  p-3 shadow-md max-w-full ${
            DarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
          }`}
        >
          <BiBot />
          <div
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </li>
      </ul>
    </div>
  );
};

export default Message;
