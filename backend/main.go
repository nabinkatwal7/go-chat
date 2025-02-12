package main

import (
	"fmt"
	"net/http"

	"github.com/nabinkatwal7/chat/pkg/ws"
)

func serveWs (w http.ResponseWriter, r *http.Request) {
	socket, err := ws.Upgrade(w, r)
	if err != nil {
		fmt.Println(err)
	}
	go ws.Writer(socket)
	ws.Reader(socket)
}

func setupRoutes(){
	http.HandleFunc("/ws", serveWs)
}

func main() {
	fmt.Println("WS Enabled")
	setupRoutes()
	http.ListenAndServe(":8080", nil)
}