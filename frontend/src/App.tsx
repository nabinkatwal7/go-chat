import { useEffect, useState } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import ChatHistory from "./components/ChatHistory/ChatHistory";
import ChatInput from "./components/ChatInput";
import Header from "./components/Header/Header";

function App() {
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  useEffect(() => {
    connect((msg: string) => {
      console.log("New Message", msg);
    });
  }, []);

  const send = (
    event: React.KeyboardEvent<HTMLInputElement>,
    message: string
  ) => {
    if (event.keyCode === 13) {
      setChatHistory((prevChatHistory) => [...prevChatHistory, message]);
      sendMsg(message);
    }
  };

  return (
    <div className="">
      <Header />
      <ChatHistory messages={chatHistory} />
      <ChatInput send={(event) => send(event, event.currentTarget.value)} />
    </div>
  );
}

export default App;
