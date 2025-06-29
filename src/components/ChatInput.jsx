import { BsSend } from "react-icons/bs";

const ChatInput = ({ SetText, DarkMode, main, Text }) => {
  return (
    <div
      className={`w-full h-16 flex justify-center items-center max-w-[700px] rounded-xl shadow-lg absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-1/2   ${
        DarkMode ? "bg-gray-900 text-white " : "bg-[#bdd2db] text-black"
      }`}
    >
      <div className="flex h-full justify-between shadow-2xl items-center w-full px-3 py-3">
        <input
          onChange={(e) => SetText(e.target.value)}
          type="text"
          value={Text}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              main();
              SetText("");
            }
          }}
          placeholder="Ask me anything about Web Dev or DSA in Hindi or English..."
          className={`flex-1 h-full outline-none resize-none placeholder:text-[0.8rem] ${
            DarkMode
              ? "placeholder:text-gray-400"
              : "placeholder:text-gray-700 "
          }`}
        />
        <button
          onClick={() => {
            main();
            SetText("");
          }}
          
          className="text-2xl cursor-pointer outline-none"
        >
          <BsSend />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
