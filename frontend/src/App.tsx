import { useEffect, useState } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import ChatHistory from "./components/ChatHistory/ChatHistory";
import Header from "./components/Header/Header";

function App() {
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  useEffect(() => {
    connect((msg: string) => {
      console.log("New Message", msg);
    });
  }, []);

  const send = (message: string) => {
    setChatHistory((prevChatHistory) => [...prevChatHistory, message]);
    sendMsg(message);
  };

  return (
    <div className="">
      <Header />
      <ChatHistory messages={chatHistory} />
      <button
        className="bg-[#15223b] text-white px-4 py-2 rounded-md"
        onClick={() => send("Hello from the frontend")}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
