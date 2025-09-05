import {Hono} from "@hono/hono";

const app = new Hono();

app.get("/", (c) => c.text("Hello, from Deno and Hono!"));

const clients = new Set<WebSocket>(); // websocket clients

app.get("/ws", (c) => {
    const { response, socket } = Deno.upgradeWebSocket(c.req.raw);

    socket.onopen = () => {
        console.log("WebSocket connection established");
        clients.add(socket);
    };

    socket.onmessage = (e) => {
        console.log("Message received from client");

        for (const client of clients) {
            if (client !== socket && client.readyState === WebSocket.OPEN) {
                client.send(e.data);
            }
        }
    };

    socket.onclose = () => {
        console.log("WebSocket connection closed");
        clients.delete(socket);
    };

    socket.onerror = (e) => {
        console.log("WebSocket error", e);
        clients.delete(socket);
    }
    return response;
})

Deno.serve(app.fetch);