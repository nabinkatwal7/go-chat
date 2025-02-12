const ChatInput = ({
  send,
}: {
  send: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="w-[95%] block m-auto">
      <input
        onKeyDown={send}
        className="p-[10px] m-0 text-base border-none rounded-md w-full shadow-lg"
      />
    </div>
  );
};

export default ChatInput;
