import FormattedOutput from "./FormattedOutput";

const ChatLoading = ({ Loading, text , DarkMode}) => {
  return (
    <>
      {Loading ? (
        <div className="typing-animation text-purple-400 font-semibold  ">
         Deep Thinking...
        </div>
      ) : (
        <FormattedOutput DarkMode={DarkMode} aiText={text} />
      )}
    </>
  );
};

export default ChatLoading;
