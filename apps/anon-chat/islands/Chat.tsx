import { useState } from "preact/hooks";

export default function Chat() {
    const [message, setMessage] = useState("");
    const socket = new WebSocket("ws://localhost:8000/ws");
    socket.onopen = () => {
        console.log("WebSocket connection established");
    };
    socket.onmessage = (e) => {
        console.log("Message received from client", e.data);
    }
    const sendMessage = () => {
        socket.send(message);
    }
    return  <div>
        <textarea id="log" cols="50" rows="10" readOnly className={"border"}></textarea><br/>
        <div className={"border p-2 flex"}>
            <input id="msg" type="text" placeholder="Type a message..." className={"border p-2 m-2 w-[80%]"} onChange={(e) => setMessage(e.currentTarget.value)} value={message}/>
            <button id="send" className={"border bg-slate-900 text-white px-4 py-2 text-xl rounded-xl"} onClick={sendMessage}>Send</button>
        </div>
    </div>
};

