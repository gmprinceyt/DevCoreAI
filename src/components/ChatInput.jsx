import { BsSend } from "react-icons/bs";

const ChatInput = ({ SetText, DarkMode,main }) => {
  return (
    <div className={`w-full h-16 flex justify-center items-center max-w-[700px] rounded-xl shadow-lg absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-1/2   ${DarkMode ? 'bg-gray-900 text-white ' : 'bg-gray-200 text-black'}`}>
      <div className="flex h-full justify-between items-center w-full px-3 py-3">
        <input 
          onChange={(e) => SetText(e.target.value)}
          type="text"
          className="flex-1 h-full outline-none resize-none"
        />
        <button onClick={main} className="text-2xl cursor-pointer outline-none"><BsSend/></button>
      </div>
    </div>
  );
};

export default ChatInput;
