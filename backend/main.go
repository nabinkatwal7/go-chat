package main

import (
	"fmt"
	"net/http"

	"github.com/nabinkatwal7/chat/pkg/ws"
)

func serveWs (pool *ws.Pool, w http.ResponseWriter, r *http.Request) {
	fmt.Println("WebSocket Endpoint Hit")
	socket, err := ws.Upgrade(w, r)
	if err != nil {
		fmt.Println(err)
	}

	client := &ws.Client{
		Conn: socket,
		Pool: pool,
	}

	pool.Register <- client
	client.Read()
}

func setupRoutes(){
	pool := ws.NewPool()
	go pool.Start()
	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		serveWs(pool, w, r)})
}

func main() {
	fmt.Println("WS Enabled")
	setupRoutes()
	http.ListenAndServe(":8080", nil)
}