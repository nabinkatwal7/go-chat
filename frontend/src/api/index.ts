const socket = new WebSocket("ws://localhost:8080");

const connect = () => {
  console.log("Attempting connection...");

  socket.onopen = () => {
    console.log("Successfully connected");
  };

  socket.onmessage = (msg) => {
    console.log(msg);
  };

  socket.onclose = (event) => {
    console.log(
      "Socket is closed. Reconnect will be attempted in 1 second.",
      event
    );
  };

  socket.onerror = (error) => {
    console.log("Socket encountered error: ", error, "Closing socket");
  };
};

const sendMsg = (msg: string) => {
  console.log("Sending message: ", msg);
  socket.send(msg);
};

export { connect, sendMsg };
