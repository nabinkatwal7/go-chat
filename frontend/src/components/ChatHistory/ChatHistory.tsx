const ChatHistory = ({ messages }: { messages: string[] }) => {
  return (
    <div className="bg-[#f7f7f7] m-0 p-[20px]">
      <h2>History</h2>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
};

export default ChatHistory;
