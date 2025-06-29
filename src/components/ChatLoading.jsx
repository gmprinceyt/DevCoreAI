
const ChatLoading = ({ Loading, html }) => {
  return (
    <>
      {Loading ? (
        <div className="typing-animation text-purple-400 font-semibold  ">
          DevCore is Typing...
        </div>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: html }} />
      )}
    </>
  );
};

export default ChatLoading;
